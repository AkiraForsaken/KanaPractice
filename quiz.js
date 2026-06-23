// ── STATE ─────────────────────────────────────────────────────────────────────
const state = {
  quiz: 'characters', // 'characters' | 'sentences'
  script: 'hiragana',   // 'hiragana' | 'katakana' | 'both'
  sets: new Set(['basic']), // multi-select: 'basic' | 'dakuten' | 'combo'
  level: 'all',
  questionCount: 'all',
  queue: [],
  allSentences: [],
  current: null,
  score: 0,
  total: 0,
  missed: [],
  answered: false,
  timerStart: null,
  timerEnd: null,
  timerInterval: null,
};

// ── DOM REFS ──────────────────────────────────────────────────────────────────
const screens = {
  setup: document.getElementById('setup-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
};

const $ = id => document.getElementById(id);

// ── UTILITIES ─────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return str.trim().toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/ō/g, 'o')
    .replace(/ū/g, 'u');
}

function romajiMatch(input, answer) {
  const inp = normalize(input);
  const ans = normalize(answer);
  if (inp === ans) return true;
  const aliases = {
    'shi': ['si'], 'chi': ['ti'], 'tsu': ['tu'], 'fu': ['hu'],
    'ji': ['zi', 'di'], 'zu': ['du'],
    'sha': ['sya'], 'shu': ['syu'], 'sho': ['syo'],
    'cha': ['tya'], 'chu': ['tyu'], 'cho': ['tyo'],
    'ja': ['jya', 'zya'], 'ju': ['jyu', 'zyu'], 'jo': ['jyo', 'zyo'],
    'wo': ['o'],
  };
  return (aliases[ans] || []).includes(inp);
}

function formatTime(ms) {
  if (ms == null) return '—';
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  return m === 0 ? `${s}s` : `${m}m ${s % 60}s`;
}

// ── TIMER ─────────────────────────────────────────────────────────────────────
function startTimer() {
  state.timerStart = Date.now();
  state.timerEnd = null;
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    $('live-timer').textContent = formatTime(Date.now() - state.timerStart);
  }, 1000);
}

function stopTimer() {
  state.timerEnd = Date.now();
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

// ── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ── CHARACTER POOL ────────────────────────────────────────────────────────────
// Returns the combined item pool for the current script + sets selection.
function getCharPool() {
  const sources = [];
  if (state.script === 'hiragana' || state.script === 'both') sources.push(HIRAGANA);
  if (state.script === 'katakana' || state.script === 'both') sources.push(KATAKANA);

  const items = [];
  sources.forEach(src => {
    state.sets.forEach(setKey => {
      if (src[setKey]) items.push(...src[setKey]);
    });
  });
  return items;
}

// ── SLIDER LOGIC ──────────────────────────────────────────────────────────────
function getMaxQuestions() {
  if (state.quiz === 'sentences') {
    let items = [...SENTENCES];
    if (state.level !== 'all') items = items.filter(s => s.level === state.level);
    return items.length;
  }
  return getCharPool().length;
}

function updateSlider() {
  const slider = $('count-slider');
  const maxQ = Math.max(getMaxQuestions(), 5); // guard against 0
  slider.min = 5;
  slider.max = maxQ;
  let cur = state.questionCount === 'all' ? maxQ : Number(state.questionCount);
  cur = Math.min(Math.max(cur, 5), maxQ);
  slider.value = cur;
  state.questionCount = cur >= maxQ ? 'all' : String(cur);
  $('count-label').textContent = cur >= maxQ ? `All (${maxQ})` : cur;
}

// ── SETUP VISIBILITY ──────────────────────────────────────────────────────────
function updateSetupVisibility() {
  const sentenceMode = state.quiz === 'sentences';

  $('script-label').classList.toggle('hidden', sentenceMode);
  $('script-group').classList.toggle('hidden', sentenceMode);
  $('set-label').classList.toggle('hidden', sentenceMode);
  $('set-group').classList.toggle('hidden', sentenceMode);

  $('level-label').classList.toggle('hidden', !sentenceMode);
  $('level-group').classList.toggle('hidden', !sentenceMode);

  updateSlider();
}

// ── SETUP LISTENERS ───────────────────────────────────────────────────────────
function initSetupListeners() {

  // ── Quiz toggle (single-select) ──
  $('quiz-group').querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $('quiz-group').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.quiz = btn.dataset.value;
      updateSetupVisibility();
    });
  });

  // ── Script toggle (single-select) ──
  $('script-group').querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $('script-group').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.script = btn.dataset.value;
      updateSlider();
    });
  });

  // ── Set toggle (multi-select) ──
  $('set-group').querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.value;
      if (state.sets.has(val)) {
        // Don't allow deselecting the last active set
        if (state.sets.size === 1) return;
        state.sets.delete(val);
        btn.classList.remove('active');
      } else {
        state.sets.add(val);
        btn.classList.add('active');
      }
      updateSlider();
    });
  });

  // ── Level toggle (single-select) ──
  $('level-group').querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $('level-group').querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.level = btn.dataset.value;
      updateSlider();
    });
  });

  // ── Slider ──
  $('count-slider').addEventListener('input', e => {
    const maxQ = getMaxQuestions();
    const val = Number(e.target.value);
    state.questionCount = val >= maxQ ? 'all' : String(val);
    $('count-label').textContent = val >= maxQ ? `All (${maxQ})` : val;
  });

  $('start-btn').addEventListener('click', startQuiz);
}

// ── QUIZ START ────────────────────────────────────────────────────────────────
function startQuiz() {
  let items;

  if (state.quiz === 'sentences') {
    let pool = [...SENTENCES];
    if (state.level !== 'all') pool = pool.filter(s => s.level === state.level);
    state.allSentences = pool;
    items = shuffle([...pool]);
    if (state.questionCount !== 'all') items = items.slice(0, Number(state.questionCount));
  } else {
    state.allSentences = [];
    items = shuffle(getCharPool());
    if (state.questionCount !== 'all') items = items.slice(0, Number(state.questionCount));
  }

  state.queue = items;
  state.total = items.length;
  state.score = 0;
  state.missed = [];
  state.answered = false;

  showScreen('quiz');
  startTimer();
  updateHeader();
  nextCard();
}

// ── HEADER UPDATE ─────────────────────────────────────────────────────────────
function updateHeader() {
  const done = state.total - state.queue.length;
  const pct = state.total > 0 ? (done / state.total) * 100 : 0;
  $('progress-fill').style.width = pct + '%';
  $('progress-label').textContent = `${done} / ${state.total}`;
  $('score-count').textContent = state.score;
}

// ── MCQ DISTRACTOR GENERATION ─────────────────────────────────────────────────
function buildChoices(correctItem) {
  const distractors = shuffle(
    state.allSentences.filter(s => s.translation !== correctItem.translation)
  ).slice(0, 3).map(s => s.translation);
  return shuffle([correctItem.translation, ...distractors]);
}

// ── NEXT CARD ─────────────────────────────────────────────────────────────────
function nextCard() {
  if (state.queue.length === 0) { showResults(); return; }

  state.current = state.queue.shift();
  state.answered = false;

  // Animate card text
  const charEl = $('kana-char');
  charEl.style.animation = 'none';
  charEl.offsetHeight; // reflow
  charEl.style.animation = '';

  const sentenceMode = state.quiz === 'sentences';
  $('kana-card').classList.toggle('sentence-mode', sentenceMode);

  if (sentenceMode) {
    // Wrap hiragana words in nowrap spans using romaji word boundaries
    const text = state.current.text;
    const reading = state.current.reading || '';
    const words = reading.trim().split(/\s+/);
    const wordCount = words.length;
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const chars = [...segmenter.segment(text)].map(s => s.segment);
    const total = chars.length;

    if (wordCount <= 1 || total === 0) {
      charEl.textContent = text;
    } else {
      const romajiLengths = words.map(w => w.length);
      const romajiTotal = romajiLengths.reduce((a, b) => a + b, 0);
      let pos = 0;
      const spans = words.map((_, wi) => {
        const share = Math.round((romajiLengths[wi] / romajiTotal) * total);
        const count = wi === wordCount - 1 ? total - pos : Math.max(1, share);
        const chunk = chars.slice(pos, pos + count).join('');
        pos += count;
        return `<span class="kana-word">${chunk}</span>`;
      });
      charEl.innerHTML = spans.join('');
    }

    // Show romaji reading as subtitle
    const hintEl = $('kana-hint');
    hintEl.textContent = reading;
    hintEl.classList.toggle('hidden', !reading);
  } else {
    charEl.textContent = state.current.char || state.current.text;

    // Show hint for character mode
    const hintEl = $('kana-hint');
    hintEl.textContent = state.current.hint || '';
    hintEl.classList.toggle('hidden', !state.current.hint);
  }

  $('feedback').classList.add('hidden');
  $('feedback-text').className = '';

  // Toggle input vs MCQ
  $('input-area').classList.toggle('hidden', sentenceMode);
  $('mcq-area').classList.toggle('hidden', !sentenceMode);

  if (sentenceMode) {
    renderMCQ();
  } else {
    const input = $('answer-input');
    input.value = '';
    input.className = 'answer-input';
    input.disabled = false;
    $('submit-btn').disabled = false;
    input.focus();
  }

  updateHeader();
}

// ── RENDER MCQ ────────────────────────────────────────────────────────────────
function renderMCQ() {
  const choices = buildChoices(state.current);
  const container = $('mcq-choices');
  container.innerHTML = '';
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => selectChoice(btn, choice));
    container.appendChild(btn);
  });
}

// ── SELECT MCQ CHOICE ─────────────────────────────────────────────────────────
function selectChoice(btn, chosen) {
  if (state.answered) return;
  state.answered = true;

  const correct = state.current.translation;
  const isRight = chosen === correct;
  const feedbackTx = $('feedback-text');

  $('mcq-choices').querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('choice-correct');
    else if (b === btn && !isRight) b.classList.add('choice-wrong');
  });

  if (isRight) {
    state.score++;
    feedbackTx.textContent = '✓ Correct!';
    feedbackTx.className = 'correct-msg';
  } else {
    state.missed.push(state.current);
    feedbackTx.textContent = `✗ The answer was: "${correct}"`;
    feedbackTx.className = 'wrong-msg';
  }

  $('feedback').classList.remove('hidden');
  $('next-btn').focus();
  updateHeader();
}

// ── SUBMIT ANSWER (character mode) ────────────────────────────────────────────
function submitAnswer() {
  if (state.answered) { nextCard(); return; }

  const input = $('answer-input');
  const rawInput = input.value.trim();
  if (!rawInput) { input.focus(); return; }

  const correct = state.current.reading || state.current.romaji;
  const isRight = romajiMatch(rawInput, correct);

  state.answered = true;
  input.disabled = true;
  $('submit-btn').disabled = true;

  const feedbackTx = $('feedback-text');
  $('feedback').classList.remove('hidden');

  if (isRight) {
    state.score++;
    input.classList.add('correct');
    feedbackTx.textContent = '✓ Correct!';
    feedbackTx.className = 'correct-msg';
  } else {
    state.missed.push(state.current);
    input.classList.add('wrong');
    feedbackTx.textContent = `✗ The answer was: ${correct}`;
    feedbackTx.className = 'wrong-msg';
  }

  $('next-btn').focus();
  updateHeader();
}

// ── RESULTS ───────────────────────────────────────────────────────────────────
function showResults() {
  stopTimer();

  const score = state.score;
  const total = state.total;
  const pct = total > 0 ? score / total : 0;
  const elapsed = state.timerEnd - state.timerStart;

  $('final-score').textContent = score;
  $('final-total').textContent = total;
  $('final-time').textContent = formatTime(elapsed);
  const avg = total > 0 ? Math.round(elapsed / total / 1000) : 0;
  $('final-avg').textContent = avg > 0 ? `~${avg}s per question` : '';

  let emoji, title, message;
  if (pct === 1) { emoji = '🏆'; title = 'Perfect!'; message = 'Flawless round. You know your kana!'; }
  else if (pct >= 0.8) { emoji = '🎉'; title = 'Great job!'; message = 'Almost there — review the ones you missed.'; }
  else if (pct >= 0.5) { emoji = '📖'; title = 'Keep going!'; message = 'Good effort. Practice makes perfect.'; }
  else { emoji = '🌱'; title = 'Keep studying!'; message = "Don't give up — repetition is the key to mastery."; }

  $('results-emoji').textContent = emoji;
  $('results-title').textContent = title;
  $('results-message').textContent = message;

  const missedList = $('missed-list');
  const missedItems = $('missed-items');
  missedItems.innerHTML = '';

  if (state.missed.length > 0) {
    missedList.classList.remove('hidden');
    state.missed.forEach(item => {
      const pill = document.createElement('div');
      pill.className = 'missed-pill';
      if (state.quiz === 'sentences') {
        pill.innerHTML = `<span class="char">${item.text}</span><span class="rom">${item.translation}</span>`;
      } else {
        const char = item.char || item.text;
        const reading = item.reading || item.romaji;
        pill.innerHTML = `<span class="char">${char}</span><span class="rom">${reading}</span>`;
      }
      missedItems.appendChild(pill);
    });
  } else {
    missedList.classList.add('hidden');
  }

  showScreen('results');
}

// ── QUIZ LISTENERS ────────────────────────────────────────────────────────────
function initQuizListeners() {
  $('submit-btn').addEventListener('click', submitAnswer);
  $('next-btn').addEventListener('click', nextCard);
  $('exit-btn').addEventListener('click', () => { stopTimer(); showScreen('setup'); });
  $('retry-btn').addEventListener('click', startQuiz);
  $('home-btn').addEventListener('click', () => showScreen('setup'));

  $('answer-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state.answered) nextCard();
      else submitAnswer();
    }
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
initSetupListeners();
updateSetupVisibility();
initQuizListeners();
showScreen('setup');
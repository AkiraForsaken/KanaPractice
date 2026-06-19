// ── STATE ─────────────────────────────────────────────────────────────────────
const state = {
  mode:          'hiragana', // 'hiragana' | 'sentences'
  order:         'random',
  set:           'basic',
  level:         'all',
  questionCount: 'all',
  queue:         [],
  allSentences:  [],   // full level-filtered pool, used for MCQ distractors
  current:       null,
  score:         0,
  total:         0,
  missed:        [],
  answered:      false,
  timerStart:    null,
  timerEnd:      null,
  timerInterval: null,
};

// ── DOM REFS ──────────────────────────────────────────────────────────────────
const screens = {
  setup:   document.getElementById('setup-screen'),
  quiz:    document.getElementById('quiz-screen'),
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
    'ji':  ['zi', 'di'], 'zu': ['du'],
    'sha': ['sya'], 'shu': ['syu'], 'sho': ['syo'],
    'cha': ['tya'], 'chu': ['tyu'], 'cho': ['tyo'],
    'ja':  ['jya', 'zya'], 'ju': ['jyu', 'zyu'], 'jo': ['jyo', 'zyo'],
    'wo':  ['o'],
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
  state.timerEnd   = null;
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

// ── SLIDER LOGIC ──────────────────────────────────────────────────────────────
function getMaxQuestions() {
  if (state.mode === 'sentences') {
    let items = [...SENTENCES];
    if (state.level !== 'all') items = items.filter(s => s.level === state.level);
    return items.length;
  }
  return (HIRAGANA[state.set] || HIRAGANA.basic).length;
}

function updateSlider() {
  const slider = $('count-slider');
  const maxQ   = getMaxQuestions();
  slider.min   = 5;
  slider.max   = maxQ;
  let cur = state.questionCount === 'all' ? maxQ : Number(state.questionCount);
  cur = Math.min(Math.max(cur, 5), maxQ);
  slider.value        = cur;
  state.questionCount = cur >= maxQ ? 'all' : String(cur);
  $('count-label').textContent = cur >= maxQ ? `All (${maxQ})` : cur;
}

// ── SETUP VISIBILITY ──────────────────────────────────────────────────────────
function updateSetupVisibility() {
  const sentenceMode = state.mode === 'sentences';
  $('set-label').classList.toggle('disabled', sentenceMode);
  $('set-group').classList.toggle('disabled', sentenceMode);
  $('order-label').classList.toggle('disabled', sentenceMode);
  $('order-group').classList.toggle('disabled', sentenceMode);
  $('level-label').classList.toggle('hidden', !sentenceMode);
  $('level-group').classList.toggle('hidden', !sentenceMode);
  updateSlider();
}

// ── SETUP LISTENERS ───────────────────────────────────────────────────────────
function initSetupListeners() {
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const rawKey = group.id.replace('-group', '');
        const key    = rawKey === 'question-count' ? 'questionCount' : rawKey;
        state[key]   = btn.dataset.value;
        updateSetupVisibility();
      });
    });
  });

  $('count-slider').addEventListener('input', e => {
    const maxQ = getMaxQuestions();
    const val  = Number(e.target.value);
    state.questionCount = val >= maxQ ? 'all' : String(val);
    $('count-label').textContent = val >= maxQ ? `All (${maxQ})` : val;
  });

  $('start-btn').addEventListener('click', startQuiz);
}

// ── QUIZ START ────────────────────────────────────────────────────────────────
function startQuiz() {
  let items;
  if (state.mode === 'sentences') {
    // Keep the full filtered pool for distractor generation
    let pool = [...SENTENCES];
    if (state.level !== 'all') pool = pool.filter(s => s.level === state.level);
    state.allSentences = pool;

    items = shuffle([...pool]);
    if (state.questionCount !== 'all') items = items.slice(0, Number(state.questionCount));
  } else {
    state.allSentences = [];
    items = [...(HIRAGANA[state.set] || HIRAGANA.basic)];
    if (state.order === 'random') items = shuffle(items);
    if (state.questionCount !== 'all') items = items.slice(0, Number(state.questionCount));
  }

  state.queue    = items;
  state.total    = items.length;
  state.score    = 0;
  state.missed   = [];
  state.answered = false;

  showScreen('quiz');
  startTimer();
  updateHeader();
  nextCard();
}

// ── HEADER UPDATE ─────────────────────────────────────────────────────────────
function updateHeader() {
  const done = state.total - state.queue.length;
  const pct  = state.total > 0 ? (done / state.total) * 100 : 0;
  $('progress-fill').style.width = pct + '%';
  $('progress-label').textContent = `${done} / ${state.total}`;
  $('score-count').textContent = state.score;
}

// ── MCQ DISTRACTOR GENERATION ─────────────────────────────────────────────────
function buildChoices(correctItem) {
  // Pull 3 distractors from the pool, excluding the correct translation
  const distractors = shuffle(
    state.allSentences.filter(s => s.translation !== correctItem.translation)
  ).slice(0, 3).map(s => s.translation);

  // Combine and shuffle so correct answer lands in a random slot
  return shuffle([correctItem.translation, ...distractors]);
}

// ── NEXT CARD ─────────────────────────────────────────────────────────────────
function nextCard() {
  if (state.queue.length === 0) { showResults(); return; }

  state.current  = state.queue.shift();
  state.answered = false;

  // Animate character
  const charEl = $('kana-char');
  charEl.style.animation = 'none';
  charEl.offsetHeight;
  charEl.style.animation = '';
  charEl.textContent = state.current.char || state.current.text;

  const hintEl = $('kana-hint');
  if (state.mode === 'sentences') {
    hintEl.textContent = state.current.reading || '';
    hintEl.classList.toggle('hidden', !state.current.reading);
  } else {
    hintEl.textContent = state.current.hint || '';
    hintEl.classList.toggle('hidden', !state.current.hint);
  }

  $('feedback').classList.add('hidden');
  $('feedback-text').className = '';

  const sentenceMode = state.mode === 'sentences';
  $('kana-card').classList.toggle('sentence-mode', sentenceMode);

  // Toggle input vs MCQ
  $('input-area').classList.toggle('hidden', sentenceMode);
  $('mcq-area').classList.toggle('hidden', !sentenceMode);

  if (sentenceMode) {
    renderMCQ();
  } else {
    const input = $('answer-input');
    input.value     = '';
    input.className = 'answer-input';
    input.disabled  = false;
    $('submit-btn').disabled = false;
    input.focus();
  }

  updateHeader();
}

// ── RENDER MCQ ────────────────────────────────────────────────────────────────
function renderMCQ() {
  const choices    = buildChoices(state.current);
  const container  = $('mcq-choices');
  container.innerHTML = '';

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className   = 'choice-btn';
    btn.textContent = choice;
    btn.addEventListener('click', () => selectChoice(btn, choice));
    container.appendChild(btn);
  });
}

// ── SELECT MCQ CHOICE ─────────────────────────────────────────────────────────
function selectChoice(btn, chosen) {
  if (state.answered) return;
  state.answered = true;

  const correct    = state.current.translation;
  const isRight    = chosen === correct;
  const feedback   = $('feedback');
  const feedbackTx = $('feedback-text');

  // Mark all buttons
  $('mcq-choices').querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) {
      b.classList.add('choice-correct');
    } else if (b === btn && !isRight) {
      b.classList.add('choice-wrong');
    }
  });

  if (isRight) {
    state.score++;
    feedbackTx.textContent = '✓ Correct!';
    feedbackTx.className   = 'correct-msg';
  } else {
    state.missed.push(state.current);
    feedbackTx.textContent = `✗ The answer was: "${correct}"`;
    feedbackTx.className   = 'wrong-msg';
  }

  feedback.classList.remove('hidden');
  $('next-btn').focus();
  updateHeader();
}

// ── SUBMIT ANSWER (hiragana mode) ─────────────────────────────────────────────
function submitAnswer() {
  if (state.answered) { nextCard(); return; }

  const input    = $('answer-input');
  const rawInput = input.value.trim();
  if (!rawInput) { input.focus(); return; }

  const correct = state.current.reading || state.current.romaji;
  const isRight = romajiMatch(rawInput, correct);

  state.answered = true;
  input.disabled = true;
  $('submit-btn').disabled = true;

  const feedback   = $('feedback');
  const feedbackTx = $('feedback-text');
  feedback.classList.remove('hidden');

  if (isRight) {
    state.score++;
    input.classList.add('correct');
    feedbackTx.textContent = '✓ Correct!';
    feedbackTx.className   = 'correct-msg';
  } else {
    state.missed.push(state.current);
    input.classList.add('wrong');
    feedbackTx.textContent = `✗ The answer was: ${correct}`;
    feedbackTx.className   = 'wrong-msg';
  }

  $('next-btn').focus();
  updateHeader();
}

// ── RESULTS ───────────────────────────────────────────────────────────────────
function showResults() {
  stopTimer();

  const score   = state.score;
  const total   = state.total;
  const pct     = total > 0 ? score / total : 0;
  const elapsed = state.timerEnd - state.timerStart;

  $('final-score').textContent = score;
  $('final-total').textContent = total;
  $('final-time').textContent  = formatTime(elapsed);

  const avg = total > 0 ? Math.round(elapsed / total / 1000) : 0;
  $('final-avg').textContent = avg > 0 ? `~${avg}s per question` : '';

  let emoji, title, message;
  if (pct === 1)       { emoji = '🏆'; title = 'Perfect!';      message = 'Flawless round. You know your kana!'; }
  else if (pct >= 0.8) { emoji = '🎉'; title = 'Great job!';    message = 'Almost there — review the ones you missed.'; }
  else if (pct >= 0.5) { emoji = '📖'; title = 'Keep going!';   message = 'Good effort. Practice makes perfect.'; }
  else                 { emoji = '🌱'; title = 'Keep studying!'; message = "Don't give up — repetition is the key to mastery."; }

  $('results-emoji').textContent   = emoji;
  $('results-title').textContent   = title;
  $('results-message').textContent = message;

  const missedList  = $('missed-list');
  const missedItems = $('missed-items');
  missedItems.innerHTML = '';

  if (state.missed.length > 0) {
    missedList.classList.remove('hidden');
    state.missed.forEach(item => {
      const pill = document.createElement('div');
      pill.className = 'missed-pill';

      if (state.mode === 'sentences') {
        // Show Japanese text + correct translation
        pill.innerHTML = `
          <span class="char">${item.text}</span>
          <span class="rom">${item.translation}</span>
        `;
      } else {
        const char    = item.char || item.text;
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
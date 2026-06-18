// ── STATE ─────────────────────────────────────────────────────────────────────
const state = {
  mode:       'hiragana', // 'hiragana' | 'sentences'
  order:      'random',   // 'random' | 'sequential'
  set:        'basic',    // 'basic' | 'dakuten' | 'combo' | 'all'
  level:      'all',
  questionCount:'all',
  queue:      [],         // items remaining in this round
  current:    null,       // active item
  score:      0,
  total:      0,
  missed:     [],         // items answered wrongly
  answered:   false,      // has user submitted for this card?
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
  // Accept common romaji variants
  return str.trim().toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/ō/g, 'o')   // macron o
    .replace(/ū/g, 'u');  // macron u
}

// Check if two romaji answers match, with alias support
function romajiMatch(input, answer) {
  const inp = normalize(input);
  const ans = normalize(answer);
  if (inp === ans) return true;

  // Common accepted aliases
  const aliases = {
    'shi': ['si'],
    'chi': ['ti'],
    'tsu': ['tu'],
    'fu':  ['hu'],
    'ji':  ['zi', 'di'],
    'zu':  ['du'],
    'sha': ['sya'],
    'shi': ['si'],
    'shu': ['syu'],
    'sho': ['syo'],
    'cha': ['tya'],
    'chu': ['tyu'],
    'cho': ['tyo'],
    'ja':  ['jya', 'zya'],
    'ju':  ['jyu', 'zyu'],
    'jo':  ['jyo', 'zyo'],
    'wo':  ['o'],
  };

  const accepted = aliases[ans] || [];
  return accepted.includes(inp);
}

// ── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ── SETUP SCREEN ──────────────────────────────────────────────────────────────
function updateAvailableSentenceCounts() {
  let available = SENTENCES;

  if (state.level !== 'all') {
    available = available.filter(
      s => s.level === state.level
    );
  }

  const total = available.length;

  document.querySelectorAll('#question-count-group .toggle-btn')
    .forEach(btn => {

      if (btn.dataset.value === 'all') return;

      const count = Number(btn.dataset.value);

      if (count > total) btn.classList.add('disabled');
      // btn.disabled = count > total;
    });
}
function updateSetupVisibility() {
  const sentenceMode = state.mode === 'sentences';

  $('set-label').classList.toggle('disabled', sentenceMode);
  $('set-group').classList.toggle('disabled', sentenceMode);

  $('order-label').classList.toggle('disabled', sentenceMode);
  $('order-group').classList.toggle('disabled', sentenceMode);

  $('level-label').classList.toggle('hidden', !sentenceMode);
  $('level-group').classList.toggle('hidden', !sentenceMode);

  $('question-count-label').classList.toggle('hidden', !sentenceMode);
  $('question-count-group').classList.toggle('hidden', !sentenceMode);
}
function initSetupListeners() {
  // Toggle groups
  document.querySelectorAll('.toggle-group').forEach(group => {
    group.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const rawKey = group.id.replace('-group', '');
        const key = rawKey == 'question-count' ? "questionCount" : rawKey;
        state[key] = btn.dataset.value;

        // Show/hide character set selector based on mode
        const setLabel = $('set-label');
        const setGroup = $('set-group');
        const orderLabel = $('order-label');
        const orderGroup = $('order-group')
        // if (state.mode === 'sentences') {
        //   setLabel.style.opacity = '0.3';
        //   setGroup.style.opacity = '0.3';
        //   setGroup.style.pointerEvents = 'none';
        //   orderLabel.style.opacity = '0.3';
        //   orderGroup.style.opacity = '0.3';
        //   orderGroup.style.pointerEvents = 'none';
        // } else {
        //   setLabel.style.opacity = '';
        //   setGroup.style.opacity = '';
        //   setGroup.style.pointerEvents = '';
        //   orderLabel.style.opacity = '';
        //   orderGroup.style.opacity = '';
        //   orderGroup.style.pointerEvents = '';
        // }
        updateSetupVisibility();
        updateAvailableSentenceCounts();
      });
    });
  });

  $('start-btn').addEventListener('click', startQuiz);
}

// ── QUIZ START ────────────────────────────────────────────────────────────────
function startQuiz() {
  // Build queue
  let items;
  if (state.mode === 'sentences') {
    items = [...SENTENCES];
    if (state.level !== 'all') {
      items = items.filter(
        sentence => sentence.level === state.level
      );
    }

    if (state.order === 'random') {
      items = shuffle(items);
    }

    if (state.questionCount !== 'all') {
      items = items.slice(
        0,
        Number(state.questionCount)
      );
    }

  } else {

    items = [...(HIRAGANA[state.set] || HIRAGANA.basic)];

    if (state.order === 'random') {
      items = shuffle(items);
    }
  }

  state.queue = items;
  state.total   = state.queue.length;
  state.score   = 0;
  state.missed  = [];
  state.answered = false;

  showScreen('quiz');
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

// ── NEXT CARD ─────────────────────────────────────────────────────────────────
function nextCard() {
  if (state.queue.length === 0) {
    showResults();
    return;
  }

  state.current  = state.queue.shift();
  state.answered = false;

  // Reset UI
  const charEl    = $('kana-char');
  const hintEl    = $('kana-hint');
  const input     = $('answer-input');
  const feedback  = $('feedback');

  // Trigger re-animation by removing and re-adding the element
  charEl.style.animation = 'none';
  charEl.offsetHeight; // reflow
  charEl.style.animation = '';

  charEl.textContent = state.current.char || state.current.text;
  hintEl.textContent = state.current.hint || '';
  hintEl.classList.toggle('hidden', !state.current.hint);

  input.value = '';
  input.className = 'answer-input';
  input.disabled  = false;
  input.focus();

  feedback.classList.add('hidden');
  $('feedback-text').className = '';
  $('translation-reveal').classList.add('hidden');
  $('submit-btn').disabled = false;

  updateHeader();
}

// ── SUBMIT ANSWER ─────────────────────────────────────────────────────────────
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

  const feedback     = $('feedback');
  const feedbackText = $('feedback-text');

  feedback.classList.remove('hidden');

  if (isRight) {
    state.score++;
    input.classList.add('correct');
    feedbackText.textContent = '✓ Correct!';
    feedbackText.className   = 'correct-msg';
  } else {
    state.missed.push(state.current);
    input.classList.add('wrong');
    feedbackText.textContent = `✗ The answer was: ${correct}`;
    feedbackText.className   = 'wrong-msg';
  }

  // Show translation for sentences
  if (state.mode === 'sentences' && state.current.translation) {
    const revealEl = $('translation-reveal');
    revealEl.classList.remove('hidden');
    revealEl.innerHTML = `<strong>Translation:</strong> ${state.current.translation}`;
  }

  $('next-btn').focus();
  updateHeader();
}

// ── RESULTS ───────────────────────────────────────────────────────────────────
function showResults() {
  const score = state.score;
  const total = state.total;
  const pct   = total > 0 ? score / total : 0;

  $('final-score').textContent = score;
  $('final-total').textContent = total;

  let emoji, title, message;
  if (pct === 1)       { emoji = '🏆'; title = 'Perfect!';       message = 'Flawless round. You know your hiragana!'; }
  else if (pct >= 0.8) { emoji = '🎉'; title = 'Great job!';     message = 'Almost there — review the ones you missed.'; }
  else if (pct >= 0.5) { emoji = '📖'; title = 'Keep going!';    message = 'Good effort. Practice makes perfect.'; }
  else                 { emoji = '🌱'; title = 'Keep studying!';  message = 'Don\'t give up — repetition is the key to mastery.'; }

  $('results-emoji').textContent  = emoji;
  $('results-title').textContent  = title;
  $('results-message').textContent = message;

  // Missed characters review
  const missedList  = $('missed-list');
  const missedItems = $('missed-items');
  missedItems.innerHTML = '';

  if (state.missed.length > 0) {
    missedList.classList.remove('hidden');
    state.missed.forEach(item => {
      const pill = document.createElement('div');
      pill.className = 'missed-pill';
      const char    = item.char || item.text;
      const reading = item.reading || item.romaji;
      pill.innerHTML = `<span class="char">${char}</span><span class="rom">${reading}</span>`;
      missedItems.appendChild(pill);
    });
  } else {
    missedList.classList.add('hidden');
  }

  showScreen('results');
}

// ── EVENT LISTENERS ───────────────────────────────────────────────────────────
function initQuizListeners() {
  $('submit-btn').addEventListener('click', submitAnswer);
  $('next-btn').addEventListener('click', nextCard);
  $('exit-btn').addEventListener('click', () => showScreen('setup'));
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

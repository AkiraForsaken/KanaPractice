// ── HIRAGANA DATA ────────────────────────────────────────────────────────────
// Each entry: { char, romaji, group }
const HIRAGANA = {
  basic: [
    // Vowels
    { char: 'あ', romaji: 'a',   group: 'vowel' },
    { char: 'い', romaji: 'i',   group: 'vowel' },
    { char: 'う', romaji: 'u',   group: 'vowel' },
    { char: 'え', romaji: 'e',   group: 'vowel' },
    { char: 'お', romaji: 'o',   group: 'vowel' },
    // K-row
    { char: 'か', romaji: 'ka',  group: 'k' },
    { char: 'き', romaji: 'ki',  group: 'k' },
    { char: 'く', romaji: 'ku',  group: 'k' },
    { char: 'け', romaji: 'ke',  group: 'k' },
    { char: 'こ', romaji: 'ko',  group: 'k' },
    // S-row
    { char: 'さ', romaji: 'sa',  group: 's' },
    { char: 'し', romaji: 'shi', group: 's' },
    { char: 'す', romaji: 'su',  group: 's' },
    { char: 'せ', romaji: 'se',  group: 's' },
    { char: 'そ', romaji: 'so',  group: 's' },
    // T-row
    { char: 'た', romaji: 'ta',  group: 't' },
    { char: 'ち', romaji: 'chi', group: 't' },
    { char: 'つ', romaji: 'tsu', group: 't' },
    { char: 'て', romaji: 'te',  group: 't' },
    { char: 'と', romaji: 'to',  group: 't' },
    // N-row
    { char: 'な', romaji: 'na',  group: 'n' },
    { char: 'に', romaji: 'ni',  group: 'n' },
    { char: 'ぬ', romaji: 'nu',  group: 'n' },
    { char: 'ね', romaji: 'ne',  group: 'n' },
    { char: 'の', romaji: 'no',  group: 'n' },
    // H-row
    { char: 'は', romaji: 'ha',  group: 'h' },
    { char: 'ひ', romaji: 'hi',  group: 'h' },
    { char: 'ふ', romaji: 'fu',  group: 'h' },
    { char: 'へ', romaji: 'he',  group: 'h' },
    { char: 'ほ', romaji: 'ho',  group: 'h' },
    // M-row
    { char: 'ま', romaji: 'ma',  group: 'm' },
    { char: 'み', romaji: 'mi',  group: 'm' },
    { char: 'む', romaji: 'mu',  group: 'm' },
    { char: 'め', romaji: 'me',  group: 'm' },
    { char: 'も', romaji: 'mo',  group: 'm' },
    // Y-row
    { char: 'や', romaji: 'ya',  group: 'y' },
    { char: 'ゆ', romaji: 'yu',  group: 'y' },
    { char: 'よ', romaji: 'yo',  group: 'y' },
    // R-row
    { char: 'ら', romaji: 'ra',  group: 'r' },
    { char: 'り', romaji: 'ri',  group: 'r' },
    { char: 'る', romaji: 'ru',  group: 'r' },
    { char: 'れ', romaji: 're',  group: 'r' },
    { char: 'ろ', romaji: 'ro',  group: 'r' },
    // W-row & n
    { char: 'わ', romaji: 'wa',  group: 'w' },
    { char: 'を', romaji: 'wo',  group: 'w' },
    { char: 'ん', romaji: 'n',   group: 'w' },
  ],

  dakuten: [
    // G-row
    { char: 'が', romaji: 'ga',  group: 'g' },
    { char: 'ぎ', romaji: 'gi',  group: 'g' },
    { char: 'ぐ', romaji: 'gu',  group: 'g' },
    { char: 'げ', romaji: 'ge',  group: 'g' },
    { char: 'ご', romaji: 'go',  group: 'g' },
    // Z-row
    { char: 'ざ', romaji: 'za',  group: 'z' },
    { char: 'じ', romaji: 'ji',  group: 'z' },
    { char: 'ず', romaji: 'zu',  group: 'z' },
    { char: 'ぜ', romaji: 'ze',  group: 'z' },
    { char: 'ぞ', romaji: 'zo',  group: 'z' },
    // D-row
    { char: 'だ', romaji: 'da',  group: 'd' },
    { char: 'ぢ', romaji: 'ji',  group: 'd' },
    { char: 'づ', romaji: 'zu',  group: 'd' },
    { char: 'で', romaji: 'de',  group: 'd' },
    { char: 'ど', romaji: 'do',  group: 'd' },
    // B-row
    { char: 'ば', romaji: 'ba',  group: 'b' },
    { char: 'び', romaji: 'bi',  group: 'b' },
    { char: 'ぶ', romaji: 'bu',  group: 'b' },
    { char: 'べ', romaji: 'be',  group: 'b' },
    { char: 'ぼ', romaji: 'bo',  group: 'b' },
    // P-row (handakuten)
    { char: 'ぱ', romaji: 'pa',  group: 'p' },
    { char: 'ぴ', romaji: 'pi',  group: 'p' },
    { char: 'ぷ', romaji: 'pu',  group: 'p' },
    { char: 'ぺ', romaji: 'pe',  group: 'p' },
    { char: 'ぽ', romaji: 'po',  group: 'p' },
  ],

  combo: [
    { char: 'きゃ', romaji: 'kya', group: 'combo-k' },
    { char: 'きゅ', romaji: 'kyu', group: 'combo-k' },
    { char: 'きょ', romaji: 'kyo', group: 'combo-k' },
    { char: 'しゃ', romaji: 'sha', group: 'combo-s' },
    { char: 'しゅ', romaji: 'shu', group: 'combo-s' },
    { char: 'しょ', romaji: 'sho', group: 'combo-s' },
    { char: 'ちゃ', romaji: 'cha', group: 'combo-t' },
    { char: 'ちゅ', romaji: 'chu', group: 'combo-t' },
    { char: 'ちょ', romaji: 'cho', group: 'combo-t' },
    { char: 'にゃ', romaji: 'nya', group: 'combo-n' },
    { char: 'にゅ', romaji: 'nyu', group: 'combo-n' },
    { char: 'にょ', romaji: 'nyo', group: 'combo-n' },
    { char: 'ひゃ', romaji: 'hya', group: 'combo-h' },
    { char: 'ひゅ', romaji: 'hyu', group: 'combo-h' },
    { char: 'ひょ', romaji: 'hyo', group: 'combo-h' },
    { char: 'みゃ', romaji: 'mya', group: 'combo-m' },
    { char: 'みゅ', romaji: 'myu', group: 'combo-m' },
    { char: 'みょ', romaji: 'myo', group: 'combo-m' },
    { char: 'りゃ', romaji: 'rya', group: 'combo-r' },
    { char: 'りゅ', romaji: 'ryu', group: 'combo-r' },
    { char: 'りょ', romaji: 'ryo', group: 'combo-r' },
    { char: 'ぎゃ', romaji: 'gya', group: 'combo-g' },
    { char: 'ぎゅ', romaji: 'gyu', group: 'combo-g' },
    { char: 'ぎょ', romaji: 'gyo', group: 'combo-g' },
    { char: 'じゃ', romaji: 'ja',  group: 'combo-j' },
    { char: 'じゅ', romaji: 'ju',  group: 'combo-j' },
    { char: 'じょ', romaji: 'jo',  group: 'combo-j' },
    { char: 'びゃ', romaji: 'bya', group: 'combo-b' },
    { char: 'びゅ', romaji: 'byu', group: 'combo-b' },
    { char: 'びょ', romaji: 'byo', group: 'combo-b' },
    { char: 'ぴゃ', romaji: 'pya', group: 'combo-p' },
    { char: 'ぴゅ', romaji: 'pyu', group: 'combo-p' },
    { char: 'ぴょ', romaji: 'pyo', group: 'combo-p' },
  ],
};

// Build the "all" set
HIRAGANA.all = [...HIRAGANA.basic, ...HIRAGANA.dakuten, ...HIRAGANA.combo];


// ── SENTENCE DATA ─────────────────────────────────────────────────────────────
// Each entry: { text (hiragana), reading (romaji), translation, hint? }
const SENTENCES = [
  // =========================
  // BEGINNER
  // =========================
    {
    text: 'おはようございます',
    reading: 'ohayou gozaimasu',
    translation: 'Good morning',
    hint: 'A polite morning greeting',
    level: 'beginner'
    },
    {
    text: 'こんにちは',
    reading: 'konnichiwa',
    translation: 'Hello',
    hint: 'Common daytime greeting',
    level: 'beginner'
    },
    {
    text: 'こんばんは',
    reading: 'konbanwa',
    translation: 'Good evening',
    hint: 'Used after sunset',
    level: 'beginner'
    },
    {
    text: 'ありがとうございます',
    reading: 'arigatou gozaimasu',
    translation: 'Thank you very much',
    hint: 'Polite gratitude',
    level: 'beginner'
    },
    {
    text: 'すみません',
    reading: 'sumimasen',
    translation: 'Excuse me',
    hint: 'Useful in many situations',
    level: 'beginner'
    },
    {
    text: 'わたしはがくせいです',
    reading: 'watashi wa gakusei desu',
    translation: 'I am a student',
    hint: 'Simple self-introduction',
    level: 'beginner'
    },
    {
    text: 'にほんごをべんきょうしています',
    reading: 'nihongo wo benkyou shite imasu',
    translation: 'I am studying Japanese',
    hint: 'A useful learner sentence',
    level: 'beginner'
    },
    {
    text: 'おなかがすきました',
    reading: 'onaka ga sukimashita',
    translation: 'I am hungry',
    hint: 'Talking about hunger',
    level: 'beginner'
    },
    {
    text: 'トイレはどこですか',
    reading: 'toire wa doko desu ka',
    translation: 'Where is the bathroom?',
    hint: 'Travel essential',
    level: 'beginner'
    },
    {
    text: 'いくらですか',
    reading: 'ikura desu ka',
    translation: 'How much is it?',
    hint: 'Shopping phrase',
    level: 'beginner'
    },
    {
    text: 'これはなんですか',
    reading: 'kore wa nan desu ka',
    translation: 'What is this?',
    hint: 'Pointing at something',
    level: 'beginner'
    },
    {
    text: 'わかりません',
    reading: 'wakarimasen',
    translation: 'I do not understand',
    hint: 'Very useful phrase',
    level: 'beginner'
    },
    {
    text: 'またあした',
    reading: 'mata ashita',
    translation: 'See you tomorrow',
    hint: 'Casual farewell',
    level: 'beginner'
    },
    {
    text: 'みずをのみます',
    reading: 'mizu wo nomimasu',
    translation: 'I drink water',
    hint: 'Simple action sentence',
    level: 'beginner'
    },
    {
    text: 'りんごがすきです',
    reading: 'ringo ga suki desu',
    translation: 'I like apples',
    hint: 'Expressing preference',
    level: 'beginner'
    },
    {
    text: 'いまなんじですか',
    reading: 'ima nanji desu ka',
    translation: 'What time is it now?',
    hint: 'Asking for the time',
    level: 'beginner'
    },
    {
    text: 'ねこがいます',
    reading: 'neko ga imasu',
    translation: 'There is a cat',
    hint: 'Using います',
    level: 'beginner'
    },
    {
    text: 'きょうはあついです',
    reading: 'kyou wa atsui desu',
    translation: 'It is hot today',
    hint: 'Weather expression',
    level: 'beginner'
    },
    {
    text: 'ともだちとあそびます',
    reading: 'tomodachi to asobimasu',
    translation: 'I play with friends',
    hint: 'Leisure activity',
    level: 'beginner'
    },
    {
    text: 'がっこうへいきます',
    reading: 'gakkou e ikimasu',
    translation: 'I go to school',
    hint: 'Movement sentence',
    level: 'beginner'
    },

  // =========================
  // INTERMEDIATE
  // =========================
    {
    text: 'きのうともだちとえいがをみました',
    reading: 'kinou tomodachi to eiga wo mimashita',
    translation: 'Yesterday I watched a movie with a friend',
    hint: 'Past tense practice',
    level: 'intermediate'
    },
    {
    text: 'まいあさろくじにおきます',
    reading: 'maiasa rokuji ni okimasu',
    translation: 'I wake up at six every morning',
    hint: 'Daily routine',
    level: 'intermediate'
    },
    {
    text: 'しゅうまつはうちでほんをよみます',
    reading: 'shuumatsu wa uchi de hon wo yomimasu',
    translation: 'I read books at home on weekends',
    hint: 'Weekend activities',
    level: 'intermediate'
    },
    {
    text: 'でんしゃでかいしゃへいきます',
    reading: 'densha de kaisha e ikimasu',
    translation: 'I go to work by train',
    hint: 'Transportation',
    level: 'intermediate'
    },
    {
    text: 'このみせはとてもゆうめいです',
    reading: 'kono mise wa totemo yuumei desu',
    translation: 'This shop is very famous',
    hint: 'Describing places',
    level: 'intermediate'
    },
    {
    text: 'にほんのたべものがだいすきです',
    reading: 'nihon no tabemono ga daisuki desu',
    translation: 'I love Japanese food',
    hint: 'Stronger preference',
    level: 'intermediate'
    },
    {
    text: 'あめがふっているのでいきません',
    reading: 'ame ga futte iru node ikimasen',
    translation: 'I am not going because it is raining',
    hint: 'Reason clause',
    level: 'intermediate'
    },
    {
    text: 'らいねんにほんへりょこうしたいです',
    reading: 'rainen nihon e ryokou shitai desu',
    translation: 'I want to travel to Japan next year',
    hint: 'Expressing desire',
    level: 'intermediate'
    },
    {
    text: 'しゅくだいをおえてからねます',
    reading: 'shukudai wo oete kara nemasu',
    translation: 'I sleep after finishing homework',
    hint: '〜てから pattern',
    level: 'intermediate'
    },
    {
    text: 'せんせいにしつもんしてもいいですか',
    reading: 'sensei ni shitsumon shite mo ii desu ka',
    translation: 'May I ask the teacher a question?',
    hint: 'Permission expression',
    level: 'intermediate'
    },

  // =========================
  // ADVANCED
  // =========================
    {
    text: 'じかんがあればほんをかりにいきます',
    reading: 'jikan ga areba hon wo kari ni ikimasu',
    translation: 'If I have time, I will go borrow a book',
    hint: 'Conditional form',
    level: 'advanced'
    },
    {
    text: 'このまちはすんでみたいほどきれいです',
    reading: 'kono machi wa sunde mitai hodo kirei desu',
    translation: 'This city is so beautiful that I want to live here',
    hint: 'Strong opinion',
    level: 'advanced'
    },
    {
    text: 'にほんごをべんきょうしはじめてさんねんになります',
    reading: 'nihongo wo benkyou shi hajimete sannen ni narimasu',
    translation: 'It has been three years since I started studying Japanese',
    hint: 'Duration expression',
    level: 'advanced'
    },
    {
    text: 'けいけんがないのでしんぱいしています',
    reading: 'keiken ga nai node shinpai shite imasu',
    translation: 'I am worried because I have no experience',
    hint: 'Giving reasons',
    level: 'advanced'
    },
    {
    text: 'できるだけまいにちれんしゅうしています',
    reading: 'dekiru dake mainichi renshuu shite imasu',
    translation: 'I practice every day as much as possible',
    hint: 'Effort expression',
    level: 'advanced'
    },
    {
    text: 'もしじかんがあったらてつだってください',
    reading: 'moshi jikan ga attara tetsudatte kudasai',
    translation: 'If you have time, please help me',
    hint: 'Polite request',
    level: 'advanced'
    },
    {
    text: 'このほんはおもったよりむずかしかったです',
    reading: 'kono hon wa omotta yori muzukashikatta desu',
    translation: 'This book was more difficult than I expected',
    hint: 'Comparison',
    level: 'advanced'
    },
    {
    text: 'しょうらいはかいがいではたらきたいです',
    reading: 'shourai wa kaigai de hatarakitai desu',
    translation: 'I want to work abroad in the future',
    hint: 'Future goals',
    level: 'advanced'
    },
    {
    text: 'まちがえてもきにしないでください',
    reading: 'machigaete mo ki ni shinaide kudasai',
    translation: 'Please do not worry about making mistakes',
    hint: 'Encouragement',
    level: 'advanced'
    },
    {
    text: 'にほんぶんかについてもっとしりたいです',
    reading: 'nihon bunka ni tsuite motto shiritai desu',
    translation: 'I want to learn more about Japanese culture',
    hint: 'Topic expression',
    level: 'advanced'
    }
  ];

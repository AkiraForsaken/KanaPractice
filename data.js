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
    // Introductions & personal info
    {
    text: 'わたしのなまえはさくらです',
    reading: 'watashi no namae wa sakura desu',
    translation: 'My name is Sakura',
    hint: 'Introducing your name',
    level: 'beginner'
    },
    {
    text: 'はじめまして',
    reading: 'hajimemashite',
    translation: 'Nice to meet you',
    hint: 'First-time greeting',
    level: 'beginner'
    },
    {
    text: 'どうぞよろしく',
    reading: 'douzo yoroshiku',
    translation: 'Please treat me well',
    hint: 'Said after introducing yourself',
    level: 'beginner'
    },
    {
    text: 'なんさいですか',
    reading: 'nansai desu ka',
    translation: 'How old are you?',
    hint: 'Asking someone\'s age',
    level: 'beginner'
    },
    {
    text: 'にじゅうさいです',
    reading: 'nijuusai desu',
    translation: 'I am twenty years old',
    hint: 'Stating your age',
    level: 'beginner'
    },
    {
    text: 'どこからきましたか',
    reading: 'doko kara kimashita ka',
    translation: 'Where are you from?',
    hint: 'Asking someone\'s origin',
    level: 'beginner'
    },
    {
    text: 'アメリカからきました',
    reading: 'Amerika kara kimashita',
    translation: 'I came from America',
    hint: 'Stating your country of origin',
    level: 'beginner'
    },

    // Family
    {
    text: 'かぞくはよにんです',
    reading: 'kazoku wa yonin desu',
    translation: 'My family has four people',
    hint: 'Describing family size',
    level: 'beginner'
    },
    {
    text: 'あにがいます',
    reading: 'ani ga imasu',
    translation: 'I have an older brother',
    hint: 'Talking about siblings',
    level: 'beginner'
    },
    {
    text: 'いもうとはみっつです',
    reading: 'imouto wa mittsu desu',
    translation: 'My younger sister is three years old',
    hint: 'Siblings and age',
    level: 'beginner'
    },

    // Food & drink
    {
    text: 'すしがたべたいです',
    reading: 'sushi ga tabetai desu',
    translation: 'I want to eat sushi',
    hint: 'Expressing desire for food',
    level: 'beginner'
    },
    {
    text: 'みせはどこですか',
    reading: 'mise wa doko desu ka',
    translation: 'Where is the shop?',
    hint: 'Finding a store',
    level: 'beginner'
    },
    {
    text: 'このたべものはおいしいです',
    reading: 'kono tabemono wa oishii desu',
    translation: 'This food is delicious',
    hint: 'Complimenting food',
    level: 'beginner'
    },
    {
    text: 'コーヒーをいっぱいください',
    reading: 'koohii wo ippai kudasai',
    translation: 'One coffee, please',
    hint: 'Ordering at a café',
    level: 'beginner'
    },
    {
    text: 'おちゃがすきですか',
    reading: 'ocha ga suki desu ka',
    translation: 'Do you like green tea?',
    hint: 'Asking about preferences',
    level: 'beginner'
    },
    {
    text: 'おなかがいっぱいです',
    reading: 'onaka ga ippai desu',
    translation: 'I am full',
    hint: 'After eating',
    level: 'beginner'
    },
    {
    text: 'メニューをみせてください',
    reading: 'menyuu wo misete kudasai',
    translation: 'Please show me the menu',
    hint: 'At a restaurant',
    level: 'beginner'
    },

    // Numbers & time
    {
    text: 'いま さんじはんです',
    reading: 'ima sanji han desu',
    translation: 'It is now three-thirty',
    hint: 'Telling the time',
    level: 'beginner'
    },
    {
    text: 'きょうはなんにちですか',
    reading: 'kyou wa nan nichi desu ka',
    translation: 'What is today\'s date?',
    hint: 'Asking the date',
    level: 'beginner'
    },
    {
    text: 'たんじょうびはいつですか',
    reading: 'tanjoubi wa itsu desu ka',
    translation: 'When is your birthday?',
    hint: 'Asking about birthdays',
    level: 'beginner'
    },
    {
    text: 'わたしのたんじょうびはしがつです',
    reading: 'watashi no tanjoubi wa shigatsu desu',
    translation: 'My birthday is in April',
    hint: 'Stating your birth month',
    level: 'beginner'
    },

    // Directions & transport
    {
    text: 'えきはちかいですか',
    reading: 'eki wa chikai desu ka',
    translation: 'Is the station close?',
    hint: 'Asking about distance',
    level: 'beginner'
    },
    {
    text: 'まっすぐいってください',
    reading: 'massugu itte kudasai',
    translation: 'Please go straight ahead',
    hint: 'Giving directions',
    level: 'beginner'
    },
    {
    text: 'みぎにまがってください',
    reading: 'migi ni magatte kudasai',
    translation: 'Please turn right',
    hint: 'Giving directions',
    level: 'beginner'
    },
    {
    text: 'バスていはどこですか',
    reading: 'basutei wa doko desu ka',
    translation: 'Where is the bus stop?',
    hint: 'Finding transport',
    level: 'beginner'
    },
    {
    text: 'でんしゃはなんじにきますか',
    reading: 'densha wa nanji ni kimasu ka',
    translation: 'What time does the train come?',
    hint: 'Checking train times',
    level: 'beginner'
    },

    // Shopping
    {
    text: 'これをください',
    reading: 'kore wo kudasai',
    translation: 'I will take this one, please',
    hint: 'Buying something in a shop',
    level: 'beginner'
    },
    {
    text: 'もっとやすいですか',
    reading: 'motto yasui desu ka',
    translation: 'Is there something cheaper?',
    hint: 'Bargaining or asking for deals',
    level: 'beginner'
    },
    {
    text: 'ちいさいサイズはありますか',
    reading: 'chiisai saizu wa arimasu ka',
    translation: 'Do you have a small size?',
    hint: 'Asking about clothing sizes',
    level: 'beginner'
    },
    {
    text: 'カードでもいいですか',
    reading: 'kaado de mo ii desu ka',
    translation: 'Is it okay to pay by card?',
    hint: 'Payment method',
    level: 'beginner'
    },
    {
    text: 'レシートをください',
    reading: 'reshiito wo kudasai',
    translation: 'Please give me a receipt',
    hint: 'Asking for a receipt',
    level: 'beginner'
    },

    // Feelings & state
    {
    text: 'つかれました',
    reading: 'tsukaremashita',
    translation: 'I am tired',
    hint: 'Expressing fatigue',
    level: 'beginner'
    },
    {
    text: 'たのしかったです',
    reading: 'tanoshikatta desu',
    translation: 'It was fun',
    hint: 'Describing a past experience',
    level: 'beginner'
    },
    {
    text: 'ちょっとさむいです',
    reading: 'chotto samui desu',
    translation: 'It is a little cold',
    hint: 'Talking about temperature',
    level: 'beginner'
    },
    {
    text: 'あたまがいたいです',
    reading: 'atama ga itai desu',
    translation: 'I have a headache',
    hint: 'Describing physical pain',
    level: 'beginner'
    },
    {
    text: 'げんきですか',
    reading: 'genki desu ka',
    translation: 'Are you well?',
    hint: 'Casual check-in greeting',
    level: 'beginner'
    },
    {
    text: 'はい、げんきです',
    reading: 'hai, genki desu',
    translation: 'Yes, I am well',
    hint: 'Responding to げんきですか',
    level: 'beginner'
    },
    {
    text: 'すこしにほんごがわかります',
    reading: 'sukoshi nihongo ga wakarimasu',
    translation: 'I understand a little Japanese',
    hint: 'Describing your language ability',
    level: 'beginner'
    },
    {
    text: 'もういちどいってください',
    reading: 'mou ichido itte kudasai',
    translation: 'Please say that one more time',
    hint: 'Asking for repetition',
    level: 'beginner'
    },
    {
    text: 'ゆっくりはなしてください',
    reading: 'yukkuri hanashite kudasai',
    translation: 'Please speak slowly',
    hint: 'Asking someone to slow down',
    level: 'beginner'
    },

    // Weather
    {
    text: 'きょうはいいてんきですね',
    reading: 'kyou wa ii tenki desu ne',
    translation: 'The weather is nice today, isn\'t it?',
    hint: 'Small talk about weather',
    level: 'beginner'
    },
    {
    text: 'あしたはあめですか',
    reading: 'ashita wa ame desu ka',
    translation: 'Will it rain tomorrow?',
    hint: 'Asking about the forecast',
    level: 'beginner'
    },
    {
    text: 'かさをもってきました',
    reading: 'kasa wo motte kimashita',
    translation: 'I brought an umbrella',
    hint: 'Preparing for rain',
    level: 'beginner'
    },

    // Daily life & home
    {
    text: 'まいにちシャワーをあびます',
    reading: 'mainichi shawaa wo abimasu',
    translation: 'I shower every day',
    hint: 'Daily routine',
    level: 'beginner'
    },
    {
    text: 'はをみがきます',
    reading: 'ha wo migakimasu',
    translation: 'I brush my teeth',
    hint: 'Morning or night routine',
    level: 'beginner'
    },
    {
    text: 'へやをかたづけます',
    reading: 'heya wo katazukemasu',
    translation: 'I tidy my room',
    hint: 'Household chores',
    level: 'beginner'
    },
    {
    text: 'てれびをみます',
    reading: 'terebi wo mimasu',
    translation: 'I watch TV',
    hint: 'Evening leisure',
    level: 'beginner'
    },
    {
    text: 'おんがくをきくのがすきです',
    reading: 'ongaku wo kiku no ga suki desu',
    translation: 'I like listening to music',
    hint: 'Talking about hobbies',
    level: 'beginner'
    },
    {
    text: 'ほんをよむのがたのしいです',
    reading: 'hon wo yomu no ga tanoshii desu',
    translation: 'Reading books is enjoyable',
    hint: 'Expressing enjoyment of hobbies',
    level: 'beginner'
    },
    {
    text: 'いぬをさんぽさせます',
    reading: 'inu wo sanpo sasemasu',
    translation: 'I walk the dog',
    hint: 'Pet-related activity',
    level: 'beginner'
    },

    // School & learning
    {
    text: 'にほんごのじゅぎょうはたのしいです',
    reading: 'nihongo no jugyou wa tanoshii desu',
    translation: 'Japanese class is fun',
    hint: 'Talking about school subjects',
    level: 'beginner'
    },
    {
    text: 'まいにちたんごをおぼえます',
    reading: 'mainichi tango wo oboemasu',
    translation: 'I memorize vocabulary every day',
    hint: 'Studying routine',
    level: 'beginner'
    },
    {
    text: 'しけんはむずかしかったです',
    reading: 'shiken wa muzukashikatta desu',
    translation: 'The exam was difficult',
    hint: 'Talking about tests',
    level: 'beginner'
    },
    {
    text: 'きょうはじゅぎょうがありません',
    reading: 'kyou wa jugyou ga arimasen',
    translation: 'There is no class today',
    hint: 'Day off from school',
    level: 'beginner'
    },

    // Polite phrases
    {
    text: 'おさきにしつれいします',
    reading: 'osaki ni shitsurei shimasu',
    translation: 'Excuse me for leaving first',
    hint: 'Said when leaving before others',
    level: 'beginner'
    },
    {
    text: 'おねがいします',
    reading: 'onegai shimasu',
    translation: 'Please / I humbly request',
    hint: 'Polite request expression',
    level: 'beginner'
    },
    {
    text: 'いただきます',
    reading: 'itadakimasu',
    translation: 'Let\'s eat (said before a meal)',
    hint: 'Mealtime expression',
    level: 'beginner'
    },
    {
    text: 'ごちそうさまでした',
    reading: 'gochisousama deshita',
    translation: 'Thank you for the meal',
    hint: 'Said after finishing a meal',
    level: 'beginner'
    },
    {
    text: 'きをつけてください',
    reading: 'ki wo tsukete kudasai',
    translation: 'Please take care',
    hint: 'Saying goodbye with care',
    level: 'beginner'
    },
    {
    text: 'おやすみなさい',
    reading: 'oyasumi nasai',
    translation: 'Good night',
    hint: 'Bedtime farewell',
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
    {
    text: 'せんしゅうにほんりょうりをつくりました',
    reading: 'senshuu nihon ryouri wo tsukurimashita',
    translation: 'Last week I made Japanese cuisine',
    hint: 'Past tense cooking',
    level: 'intermediate'
    },
    {
    text: 'こどものころよくやまにのぼりました',
    reading: 'kodomo no koro yoku yama ni noborimashita',
    translation: 'When I was a child I often climbed mountains',
    hint: 'Childhood memories',
    level: 'intermediate'
    },
    {
    text: 'はじめてにほんにいったのはさんねんまえです',
    reading: 'hajimete nihon ni itta no wa sannen mae desu',
    translation: 'The first time I went to Japan was three years ago',
    hint: 'First experiences',
    level: 'intermediate'
    },
 
    // Describing people & things
    {
    text: 'かのじょはやさしくてあたまがいいです',
    reading: 'kanojo wa yasashikute atama ga ii desu',
    translation: 'She is kind and intelligent',
    hint: 'Chaining adjectives with て',
    level: 'intermediate'
    },
    {
    text: 'このまちはしずかでとてもすみやすいです',
    reading: 'kono machi wa shizuka de totemo sumiyasui desu',
    translation: 'This town is quiet and very easy to live in',
    hint: 'Describing a place with な-adjective + で',
    level: 'intermediate'
    },
    {
    text: 'あのレストランはたかいけどおいしいです',
    reading: 'ano resutoran wa takai kedo oishii desu',
    translation: 'That restaurant is expensive but delicious',
    hint: 'Contrasting with けど',
    level: 'intermediate'
    },
 
    // Plans & intentions
    {
    text: 'らいしゅうともだちとキャンプにいくつもりです',
    reading: 'raishuu tomodachi to kyanpu ni iku tsumori desu',
    translation: 'I intend to go camping with friends next week',
    hint: 'つもり for intentions',
    level: 'intermediate'
    },
    {
    text: 'そつぎょうしたらりゅうがくしたいとおもっています',
    reading: 'sotsugyou shitara ryuugaku shitai to omotteimasu',
    translation: 'I am thinking I want to study abroad after graduating',
    hint: 'Future plans with たら',
    level: 'intermediate'
    },
    {
    text: 'くるまをかうまえにもっとおかねをためます',
    reading: 'kuruma wo kau mae ni motto okane wo tamemasu',
    translation: 'I will save more money before buying a car',
    hint: '〜まえに pattern',
    level: 'intermediate'
    },
 
    // Giving & receiving
    {
    text: 'はははわたしにセーターをあんでくれました',
    reading: 'haha wa watashi ni seetaa wo ande kuremashita',
    translation: 'My mother knitted me a sweater',
    hint: 'くれる for receiving a favour',
    level: 'intermediate'
    },
    {
    text: 'ともだちにプレゼントをあげました',
    reading: 'tomodachi ni purezento wo agemashita',
    translation: 'I gave my friend a present',
    hint: 'あげる for giving',
    level: 'intermediate'
    },
    {
    text: 'せんせいにほめてもらいました',
    reading: 'sensei ni homete moraimashita',
    translation: 'I was praised by my teacher',
    hint: 'もらう for receiving an action',
    level: 'intermediate'
    },
 
    // Expressing opinions
    {
    text: 'わたしはそのえいがはつまらないとおもいます',
    reading: 'watashi wa sono eiga wa tsumaranai to omoimasu',
    translation: 'I think that movie is boring',
    hint: 'Expressing opinion with とおもう',
    level: 'intermediate'
    },
    {
    text: 'やはりはるがいちばんすきなきせつです',
    reading: 'yahari haru ga ichiban suki na kisetsu desu',
    translation: 'After all, spring is my favourite season',
    hint: 'やはり for confirming expectations',
    level: 'intermediate'
    },
    {
    text: 'にほんごはむずかしいけどとてもおもしろいです',
    reading: 'nihongo wa muzukashii kedo totemo omoshiroi desu',
    translation: 'Japanese is difficult but very interesting',
    hint: 'Contrasting two qualities',
    level: 'intermediate'
    },
 
    // Requests & permission
    {
    text: 'ここでしゃしんをとってもいいですか',
    reading: 'koko de shashin wo totte mo ii desu ka',
    translation: 'Is it okay to take photos here?',
    hint: 'Asking permission with 〜てもいい',
    level: 'intermediate'
    },
    {
    text: 'まどをあけてもらえますか',
    reading: 'mado wo akete moraemasu ka',
    translation: 'Could you open the window for me?',
    hint: 'Polite request with もらえる',
    level: 'intermediate'
    },
    {
    text: 'このかばんをあずかっていただけますか',
    reading: 'kono kaban wo azukatte itadakemasu ka',
    translation: 'Could you look after this bag for me?',
    hint: 'Very polite request with いただく',
    level: 'intermediate'
    },
 
    // Experiences with ことがある
    {
    text: 'すもうをみたことがあります',
    reading: 'sumou wo mita koto ga arimasu',
    translation: 'I have seen sumo before',
    hint: '〜たことがある for past experience',
    level: 'intermediate'
    },
    {
    text: 'にほんのおんせんにはいったことがありません',
    reading: 'nihon no onsen ni haitta koto ga arimasen',
    translation: 'I have never been in a Japanese hot spring',
    hint: 'Negative past experience',
    level: 'intermediate'
    },
    {
    text: 'いちどもきょうとにいったことがないのでいつかいきたいです',
    reading: 'ichido mo kyouto ni itta koto ga nai node itsuka ikitai desu',
    translation: 'I have never been to Kyoto even once so I want to go someday',
    hint: 'いちども〜ない for "not even once"',
    level: 'intermediate'
    },
 
    // Work & daily routine
    {
    text: 'かいぎのまえにしりょうをじゅんびしておきます',
    reading: 'kaigi no mae ni shiryou wo junbi shite okimasu',
    translation: 'I will prepare the materials before the meeting',
    hint: '〜ておく for advance preparation',
    level: 'intermediate'
    },
    {
    text: 'しごとがおわったあとでジムへいきます',
    reading: 'shigoto ga owatta ato de jimu e ikimasu',
    translation: 'I go to the gym after work finishes',
    hint: '〜たあとで for sequencing events',
    level: 'intermediate'
    },
    {
    text: 'らいしゅうのすいようびまでにレポートをだしてください',
    reading: 'raishuu no suiyoubi made ni repooto wo dashite kudasai',
    translation: 'Please submit the report by next Wednesday',
    hint: '〜までに for deadlines',
    level: 'intermediate'
    },
 
    // Health & body
    {
    text: 'かぜをひいてしまったのでびょういんへいきました',
    reading: 'kaze wo hiite shimatta node byouin e ikimashita',
    translation: 'I caught a cold so I went to the hospital',
    hint: '〜てしまう for unintended results',
    level: 'intermediate'
    },
    {
    text: 'まいにちさんじっぷんうんどうするようにしています',
    reading: 'mainichi sanjuppun undou suru you ni shiteimasu',
    translation: 'I try to exercise for thirty minutes every day',
    hint: '〜ようにする for making efforts',
    level: 'intermediate'
    },
    {
    text: 'さいきんよくねむれていないのでつかれています',
    reading: 'saikin yoku nemurete inai node tsukarete imasu',
    translation: 'I am tired because I have not been sleeping well lately',
    hint: 'Potential negative + reason',
    level: 'intermediate'
    },
 
    // Social situations
    {
    text: 'パーティーにさそってくれてありがとうございます',
    reading: 'paatii ni sasotte kurete arigatou gozaimasu',
    translation: 'Thank you for inviting me to the party',
    hint: 'Thanking someone for a favour with くれる',
    level: 'intermediate'
    },
    {
    text: 'おくれてもうしわけありません',
    reading: 'okurete moushiwake arimasen',
    translation: 'I sincerely apologise for being late',
    hint: 'Formal apology expression',
    level: 'intermediate'
    },
    {
    text: 'またいっしょにしょくじをしましょう',
    reading: 'mata issho ni shokuji wo shimashou',
    translation: 'Let\'s have a meal together again sometime',
    hint: 'Making plans with ましょう',
    level: 'intermediate'
    },
    {
    text: 'このプロジェクトはチームでとりくんでいます',
    reading: 'kono purojekuto wa chiimu de torikunde imasu',
    translation: 'We are tackling this project as a team',
    hint: 'とりくむ for working on something',
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
    },
    {
    text: 'いくらべんきょうしてもおぼえられないきじがある',
    reading: 'ikura benkyou shite mo oboerarenai kanji ga aru',
    translation: 'There are kanji that I cannot memorise no matter how much I study',
    hint: 'いくら〜ても for "no matter how much"',
    level: 'advanced'
    },
    {
    text: 'かれがそんなことをいうとはおもわなかった',
    reading: 'kare ga sonna koto wo iu to wa omowanakatta',
    translation: 'I never thought he would say such a thing',
    hint: '〜とはおもわなかった for surprise',
    level: 'advanced'
    },
    {
    text: 'しごとにおわれてじぶんのじかんがなかなかとれません',
    reading: 'shigoto ni owarete jibun no jikan ga nakanaka toremasen',
    translation: 'Being chased by work, I cannot easily find time for myself',
    hint: 'Passive for being pressured by something',
    level: 'advanced'
    },
    {
    text: 'このもんだいはかんたんにみえるがじつはふくざつだ',
    reading: 'kono mondai wa kantan ni mieru ga jitsu wa fukuzatsu da',
    translation: 'This problem looks simple but is actually complex',
    hint: '〜にみえる for appearances vs reality',
    level: 'advanced'
    },
    {
    text: 'かのじょはなにをいわれてもへいきなかおをしている',
    reading: 'kanojo wa nani wo iwarete mo heiki na kao wo shiteiru',
    translation: 'No matter what is said to her she keeps a calm expression',
    hint: 'なにを〜ても for "no matter what"',
    level: 'advanced'
    },
    {
    text: 'もっとはやくきめておけばよかったとこうかいしている',
    reading: 'motto hayaku kimete okeba yokatta to koukai shiteiru',
    translation: 'I regret that I should have decided sooner',
    hint: '〜ておけばよかった for regret about preparation',
    level: 'advanced'
    },
    {
    text: 'ながねんのけいけんをいかしてあたらしいじぎょうをはじめた',
    reading: 'naganen no keiken wo ikashite atarashii jigyou wo hajimeta',
    translation: 'I started a new business making use of my years of experience',
    hint: 'いかす for leveraging something',
    level: 'advanced'
    },
    {
    text: 'かれはことばすくなにしかしはっきりとじぶんのいけんをのべた',
    reading: 'kare wa kotoba sukunani shika shi hakkiri to jibun no iken wo nobeta',
    translation: 'He spoke few words but stated his opinion clearly',
    hint: 'ことばすくなに for speaking concisely',
    level: 'advanced'
    },
    {
    text: 'このけいかくがうまくいくかどうかはやってみなければわからない',
    reading: 'kono keikaku ga umaku iku ka dou ka wa yatte minakereba wakaranai',
    translation: 'Whether this plan will go well or not cannot be known without trying',
    hint: '〜かどうか embedded question + 〜なければわからない',
    level: 'advanced'
    },
    {
    text: 'しゃかいにでてからはじめてがっこうのたいせつさにきがついた',
    reading: 'shakai ni dete kara hajimete gakkou no taisetsusa ni ki ga tsuita',
    translation: 'It was only after entering society that I first noticed the importance of school',
    hint: '〜てからはじめて for realising something only after an event',
    level: 'advanced'
    }
  ];
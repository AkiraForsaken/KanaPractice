# KanaPractice

KanaPractice is a simple browser-based Japanese kana quiz that helps learners practice hiragana and sentence reading in romaji.

## Features

- Hiragana quiz mode with multiple character sets: Basic, Dakuten, Combos, or All
- Sentence quiz mode with beginner, intermediate, and advanced levels
- Random or sequential ordering
- Choose the number of sentence questions for sentence mode
- Score tracking and review of missed items

## Project structure

- `index.html` – app markup and screen structure
- `styles.css` – app styling and responsive layout
- `data.js` – kana and sentence data definitions
- `quiz.js` – quiz logic, state management, and event handling

## Usage

1. Open `index.html` in your browser.
2. Select a quiz mode and any available options.
3. Click **Begin Quiz**.
4. Type the romaji answer and submit.
5. Review your score at the end and retry or change settings.

## Development

No build step is required — the app runs entirely in the browser.

To work on the app locally:

1. Open the project folder in your editor.
2. Use a local web server or open `index.html` directly.

## Notes

- Sentence mode uses the `SENTENCES` dataset from `data.js`.
- Hiragana mode uses the `HIRAGANA` dataset from `data.js`.

## License

This project is provided as-is.

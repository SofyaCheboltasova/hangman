/* eslint-disable import/extensions */
// hangman убрать
// убрать классы у клавы

import { generateQApair } from "./qaPair.js";
import { updateQuestionPartHtml } from "./questionPartHtml.js";
import { resetAttempts } from "./attempts.js";
import { resetHangmanImg } from "./hangman.js";

async function resetGame() {
  const newQApair = await generateQApair();
  updateQuestionPartHtml(newQApair);
  resetAttempts();
  resetHangmanImg();
}

export default resetGame;

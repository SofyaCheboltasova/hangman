/* eslint-disable import/extensions */
// questionPartHtml
// attempts
// hangman убрать
// убрать классы у клавы

import { generateQApair } from "./qaPair.js";
import { updateQuestionPartHtml } from "./questionPartHtml.js";
import { resetAttempts } from "./attempts.js";

async function resetGame() {
  const newQApair = await generateQApair();
  updateQuestionPartHtml(newQApair);
  resetAttempts();
}

export default resetGame;

/* eslint-disable import/extensions */
// questionPartHtml
// attempts
// hangman убрать
// убрать классы у клавы

import { generateQApair } from "./qaPair.js";
import { updateQuestionPartHtml } from "./questionPartHtml.js";

async function resetGame() {
  const newQApair = await generateQApair();
  updateQuestionPartHtml(newQApair);
}

export default resetGame;

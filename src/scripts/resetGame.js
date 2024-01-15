/* eslint-disable import/extensions */
// questionPartHtml
// attempts
// hangman убрать
// убрать классы у клавы

import { getQApair } from "./qaPair.js";

async function resetGame() {
  // const content = document.querySelector(".content");

  const newQApair = await getQApair();
  console.log(newQApair.answer, newQApair.question);
}

export default resetGame;

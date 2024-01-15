/* eslint-disable import/extensions */

import { generateQApair } from "./qaPair.js";
import { updateQuestionPartHtml } from "./questionPartHtml.js";
import { resetAttempts } from "./attempts.js";
import { resetHangmanImg } from "./hangman.js";

/*
	Implement it here due to dependencies cycle
*/
function resetKeyboard() {
  const keyboard = document.querySelector(".keyboard");
  const keys = keyboard.querySelectorAll(".keyboard-line__key_pressed");

  keys.forEach((key) => {
    key.classList.remove("keyboard-line__key_pressed");
    key.classList.add("keyboard-line__key");
  });
}

async function resetGame() {
  const newQApair = await generateQApair();
  updateQuestionPartHtml(newQApair);
  resetAttempts();
  resetHangmanImg();
  resetKeyboard();
}

export default resetGame;

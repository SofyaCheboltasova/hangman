// eslint-disable-next-line import/extensions
import { getMistakesCount } from "./attempts.js";

function resetHangmanImg() {
  const hangman = document.querySelector(".hangman");
  const img = document.querySelector(".main__image");

  if (hangman) {
    img.removeChild(hangman);
  }
}

function drawBody() {
  resetHangmanImg();
  const img = document.querySelector(".main__image");

  const mistakesCount = getMistakesCount();
  const hangman = document.createElement("img");
  hangman.className = "hangman";
  hangman.src = `./assets/img/man/${mistakesCount}mistake.svg`;
  img.appendChild(hangman);
}

export { drawBody, resetHangmanImg };

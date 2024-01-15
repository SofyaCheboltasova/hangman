// eslint-disable-next-line import/extensions
import { getMistakesCount } from "./attempts.js";

function drawBody() {
  const previousHangman = document.querySelector(".hangman");
  const img = document.querySelector(".main__image");

  if (previousHangman) {
    img.removeChild(previousHangman);
  }

  const mistakesCount = getMistakesCount();
  const hangman = document.createElement("img");
  hangman.className = "hangman";
  hangman.src = `src/assets/img/man/${mistakesCount}mistake.svg`;
  img.appendChild(hangman);
}

export default drawBody;

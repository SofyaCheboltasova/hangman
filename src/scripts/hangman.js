// eslint-disable-next-line import/extensions
import { getMistakesCount } from "./attempts.js";

function drawBody() {
  const previousHangman = document.querySelector(".hangman");

  if (previousHangman) {
    document.body.removeChild(previousHangman);
  }

  const mistakesCount = getMistakesCount();
  const hangman = document.createElement("img");
  hangman.className = "hangman";
  hangman.src = `src/assets/img/man/${mistakesCount}mistake.svg`;
  document.body.appendChild(hangman);
}

export default drawBody;

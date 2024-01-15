/* eslint-disable import/extensions */
import resetGame from "./resetGame.js";

function setModalElements(isWin, answer) {
  const modal = document.querySelector(".modal");
  const img = modal.querySelector(".hangman");
  const message = modal.querySelector("h2");
  const fullWord = modal.querySelector(".answer");
  fullWord.textContent = answer;

  if (isWin) {
    img.src = "src/assets/img/man/winner.svg";
    message.textContent = "Congratulations! You won!";
  } else {
    img.src = "src/assets/img/man/6mistake.svg";
    message.textContent = "You lost :( Try again!";
  }
}

function setButtonListener(button) {
  button.addEventListener("click", async () => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    document.body.removeChild(modal);
    document.body.removeChild(overlay);

    await resetGame();
  });
}

function createModal(isWin, answer) {
  const overlay = document.createElement("div");
  const modal = document.createElement("div");
  overlay.classList.add("overlay");
  modal.classList.add("modal");

  const message = document.createElement("h1");
  const fullWord = document.createElement("h2");
  const button = document.createElement("button");

  button.textContent = "Play again";
  button.classList.add("button");
  setButtonListener(button);
  fullWord.textContent = `Answer: ${answer}`;

  const img = document.createElement("img");

  if (isWin) {
    img.src = "src/assets/img/man/winner.svg";
    message.textContent = "Congratulations! You won!";
  } else {
    img.src = "src/assets/img/man/6mistake.svg";
    message.textContent = "You lost :( Try again!";
  }

  modal.append(message, img, fullWord, button);
  document.body.append(overlay, modal);
}

function setModalVisible(isWin, answer) {
  const modal = document.querySelector(".modal");

  if (!modal) {
    createModal(isWin, answer);
  } else {
    setModalElements(isWin, answer);
  }
}

export default setModalVisible;

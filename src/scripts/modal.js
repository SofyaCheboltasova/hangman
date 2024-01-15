/* eslint-disable import/extensions */
import resetGame from "./resetGame.js";

let modalOpen = false;
function setModalElements(isWin, answer) {
  const modal = document.querySelector(".modal");
  const message = modal.querySelector("h2");
  const fullWord = modal.querySelector(".answer");
  fullWord.textContent = answer;

  let imgWrapper = modal.querySelector(".modal__winner-img");
  if (!imgWrapper) {
    imgWrapper = modal.querySelector(".modal__looser-img");
  }

  if (isWin) {
    imgWrapper.className = "modal__winner-img";
    message.textContent = "Congratulations! You won!";
  } else {
    imgWrapper.className = "modal__looser-img";
    message.textContent = "You lost :( Try again!";
  }
}

function setButtonListener(button) {
  button.addEventListener("click", async () => {
    const modalWrapper = document.querySelector(".modal-wrapper");
    document.body.removeChild(modalWrapper);

    modalOpen = false;

    await resetGame();
  });
}

function createModal(isWin, answer) {
  const overlay = document.createElement("div");
  const modal = document.createElement("div");
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");
  overlay.classList.add("modal-wrapper__overlay");
  modal.classList.add("modal-wrapper__modal");

  const message = document.createElement("h1");
  const fullWord = document.createElement("h2");
  const button = document.createElement("button");

  button.textContent = "Play again";
  button.classList.add("button");
  setButtonListener(button);
  fullWord.textContent = `Answer: ${answer}`;

  const imgWrapper = document.createElement("div");

  if (isWin) {
    imgWrapper.classList.add("modal__winner-img");
    message.textContent = "Congratulations! You won!";
  } else {
    imgWrapper.classList.add("modal__looser-img");
    message.textContent = "You lost :( Try again!";
  }
  modal.append(message, imgWrapper, fullWord, button);
  modalOpen = true;
  modalWrapper.append(overlay, modal);
  document.body.append(modalWrapper);
}

function setModalVisible(isWin, answer) {
  const modal = document.querySelector(".modal");

  if (!modal) {
    createModal(isWin, answer);
  } else {
    setModalElements(isWin, answer);
  }
}

function isModalOpen() {
  return modalOpen;
}

export { setModalVisible, isModalOpen };

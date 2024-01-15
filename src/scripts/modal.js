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

function createModal(isWin, answer) {
  const overlay = document.createElement("div");
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const message = document.createElement("h2");
  const fullWord = document.createElement("h2");
  const button = document.createElement("button");

  button.textContent = "Play again";
  fullWord.classList.add("answer");
  fullWord.textContent = `Answer: ${answer}`;

  const img = document.createElement("img");
  img.className = "hangman";

  if (isWin) {
    img.src = "src/assets/img/man/winner.svg";
    message.textContent = "Congratulations! You won!";
  } else {
    img.src = "src/assets/img/man/6mistake.svg";
    message.textContent = "You lost :( Try again!";
  }

  modal.append(message, fullWord, img, button);
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

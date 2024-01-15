/* eslint-disable import/extensions */
import clickedKeyHandler from "./clickedKeyHandler.js";

function createKeyboardSection(startNumber, keystInSection) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm␡";
  const letterCodes = [
    81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    90, 88, 67, 86, 66, 78, 77, 8,
  ];

  const section = document.createElement("div");
  const endNumber = startNumber + keystInSection;
  section.className = "keyboard-line";

  for (let i = startNumber; i < endNumber; i += 1) {
    const div = document.createElement("div");
    div.className = "keyboard__key";
    div.textContent = alphabet[i];
    div.dataset.code = letterCodes[i];
    section.appendChild(div);
  }
  return section;
}

function addKeyboardListeners(keyboard) {
  const keys = keyboard.querySelectorAll(".keyboard__key");

  keys.forEach((key) => {
    key.addEventListener("click", () => {
      if (key.classList.contains("keyboard__key_pressed")) {
        return;
      }
      const clickedKey = key;
      clickedKey.classList.add("keyboard__key_pressed");

      const letter = key.textContent;
      clickedKeyHandler(letter);
    });
  });
}

function createKeyboard() {
  const keyboard = document.createElement("div");
  const keysInSection = [10, 9, 8];
  let startNumber = 0;
  keyboard.className = "keyboard";

  for (let i = 0; i < keysInSection.length; i += 1) {
    const line = createKeyboardSection(startNumber, keysInSection[i]);
    startNumber += keysInSection[i];
    keyboard.appendChild(line);
  }

  addKeyboardListeners(keyboard);
  return keyboard;
}

const keyboard = createKeyboard();
export default keyboard;

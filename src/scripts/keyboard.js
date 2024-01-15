/* eslint-disable import/extensions */
import clickedKeyHandler from "./clickedKeyHandler.js";

const alphabet = "qwertyuiopasdfghjklzxcvbnm";

function createKeyboardSection(startNumber, keystInSection) {
  const section = document.createElement("div");
  const endNumber = startNumber + keystInSection;
  section.className = "keyboard-line";

  for (let i = startNumber; i < endNumber; i += 1) {
    const div = document.createElement("div");
    div.className = "keyboard__key";
    div.textContent = alphabet[i];
    div.setAttribute("id", alphabet[i]);
    section.appendChild(div);
  }
  return section;
}

function addPhysicalKeyboardListeners() {
  document.addEventListener("keydown", async (event) => {
    const letter = event.code[event.code.length - 1].toLowerCase();
    if (!alphabet.includes(letter) || event.code.slice(0, 3) !== "Key") {
      return;
    }

    const clickedKey = document.getElementById(letter);
    if (clickedKey.classList.contains("keyboard__key_pressed")) {
      return;
    }
    clickedKey.classList.add("keyboard__key_pressed");
    clickedKey.classList.remove("keyboard__key");

    await clickedKeyHandler(letter);
  });
}

function addKeyboardListeners(keyboard) {
  const keys = keyboard.querySelectorAll(".keyboard__key");

  keys.forEach((key) => {
    key.addEventListener("click", async () => {
      if (key.classList.contains("keyboard__key_pressed")) {
        return;
      }
      const clickedKey = key;
      clickedKey.classList.add("keyboard__key_pressed");
      clickedKey.classList.remove("keyboard__key");

      const letter = key.textContent;
      await clickedKeyHandler(letter);
    });
  });

  addPhysicalKeyboardListeners();
}

function createKeyboard() {
  const keyboard = document.createElement("div");
  const keysInSection = [10, 9, 7];
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

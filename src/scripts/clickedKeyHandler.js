/* eslint-disable import/extensions */
import qaPair from "./qaPair.js";
import drawBody from "./hangman.js";
import { reduceAttempts, areAttemptsEnd } from "./attempts.js";

function getMatchedIndexes(key) {
  const { answer } = qaPair;
  const answerArray = answer.toLowerCase().split("");

  let indexes = answerArray.map((answerKey, i) => {
    if (answerKey === key) return i;
    return undefined;
  });

  indexes = indexes.filter((index) => index !== undefined);
  return indexes;
}

function isWordFullfilled() {
  const hiddenLetters = document.querySelectorAll(".symbol__letter_hidden");

  return hiddenLetters === 0;
}

function clickedKeyHandler(key) {
  const matchedIndexes = getMatchedIndexes(key);

  if (matchedIndexes.length) {
    const hiddenLetters = document.querySelectorAll(".symbol__letter");

    for (let i = 0; i < matchedIndexes.length; i += 1) {
      const idx = matchedIndexes[i];
      hiddenLetters[idx].classList.remove("symbol__letter_hidden");
    }

    if (isWordFullfilled()) {
      // setModalVisible();
    }
  } else {
    drawBody();
    reduceAttempts();

    if (areAttemptsEnd()) {
      // setModalVisible();
    }
  }
}

export default clickedKeyHandler;

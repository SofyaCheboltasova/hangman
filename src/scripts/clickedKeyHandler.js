/* eslint-disable import/extensions */
import { getQApair } from "./qaPair.js";
import drawBody from "./hangman.js";
import setModalVisible from "./modal.js";
import { reduceAttempts, areAttemptsEnd } from "./attempts.js";

async function getMatchedIndexes(key) {
  const qaPair = await getQApair();
  const answerArray = qaPair.answer.toLowerCase().split("");

  let indexes = answerArray.map((answerKey, i) => {
    if (answerKey === key) return i;
    return undefined;
  });

  indexes = indexes.filter((index) => index !== undefined);
  return indexes;
}

function isWordFullfilled() {
  const hiddenLetters = document.querySelectorAll(".symbol__letter_hidden");
  return hiddenLetters.length === 0;
}

async function clickedKeyHandler(key) {
  const matchedIndexes = await getMatchedIndexes(key);
  const qaPair = await getQApair();

  if (matchedIndexes.length) {
    const hiddenLetters = document.querySelectorAll(".symbol__letter");

    for (let i = 0; i < matchedIndexes.length; i += 1) {
      const idx = matchedIndexes[i];
      hiddenLetters[idx].classList.remove("symbol__letter_hidden");
    }

    if (isWordFullfilled()) {
      setModalVisible(true, qaPair.answer);
    }
  } else {
    reduceAttempts();
    drawBody();

    if (areAttemptsEnd()) {
      setModalVisible(false, qaPair.answer);
    }
  }
}

export default clickedKeyHandler;

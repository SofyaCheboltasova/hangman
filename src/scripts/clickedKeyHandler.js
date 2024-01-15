/* eslint-disable import/extensions */
import qaPair from "./qaPair.js";

function isKeyCorrect(key) {
  const { answer } = qaPair;

  const answerArray = answer.toLowerCase().split("");
  return answerArray.includes(key);
}

function clickedKeyHandler(key) {
  const isCorrect = isKeyCorrect(key);
  console.log(isCorrect);
}

export default clickedKeyHandler;

// eslint-disable-next-line import/extensions
import { getQApair } from "./qaPair.js";

function createAnswerSymbols(qaPair, answerTag) {
  const letters = qaPair.answer.split("");

  for (let i = 0; i < qaPair.answer.length; i += 1) {
    const wrapper = document.createElement("div");
    const letter = document.createElement("div");
    const underscore = document.createElement("div");

    wrapper.className = "symbol";
    letter.classList.add("symbol__letter", "symbol__letter_hidden");
    letter.textContent = letters[i];
    underscore.className = "symbol__underscore";

    wrapper.append(letter, underscore);
    answerTag.appendChild(wrapper);
  }
}

function updateQuestionPartHtml(newQApair) {
  const question = document.querySelector(".question");
  const answer = document.querySelector(".answer");
  question.textContent = newQApair.question;
  answer.replaceChildren();

  createAnswerSymbols(newQApair, answer);
}

async function getQuestionPartHtml() {
  const question = document.createElement("h2");
  const answer = document.createElement("div");
  const qaPair = await getQApair();

  createAnswerSymbols(qaPair, answer);

  question.textContent = qaPair.question;
  question.className = "question";
  answer.className = "answer";

  return { question, answer };
}

const questionPartHtml = await getQuestionPartHtml();
export { questionPartHtml, updateQuestionPartHtml };

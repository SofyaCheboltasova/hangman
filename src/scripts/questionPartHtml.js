// eslint-disable-next-line import/extensions
import qaPair from "./qaPair.js";

async function getQuestionPartHtml() {
  const question = document.createElement("h2");
  const answer = document.createElement("div");
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
    answer.appendChild(wrapper);
  }

  question.textContent = qaPair.question;
  answer.className = "answer";

  return { question, answer };
}

const questionPartHtml = await getQuestionPartHtml();
export default questionPartHtml;

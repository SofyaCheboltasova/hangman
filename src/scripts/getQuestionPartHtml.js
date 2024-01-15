// eslint-disable-next-line import/extensions
import qaPair from "./getQApair.js";

async function getQuestionPartHtml() {
  const question = document.createElement("h2");
  const underscores = document.createElement("div");

  for (let i = 0; i < qaPair.answer.length; i += 1) {
    const underscore = document.createElement("div");
    underscore.className = "underscore";
    underscores.appendChild(underscore);
  }

  question.textContent = qaPair.question;
  underscores.className = "underscores";

  return { question, underscores };
}

const questionPartHtml = await getQuestionPartHtml();
export default questionPartHtml;

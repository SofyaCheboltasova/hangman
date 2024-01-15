/* eslint-disable import/extensions */
import keyboard from "./keyboard.js";
import questionPartHtml from "./questionPartHtml.js";

async function getQuizHtml() {
  const content = document.createElement("section");
  const attempts = document.createElement("h2");

  content.className = "content";
  attempts.textContent = `5 attempts left`;

  content.append(
    questionPartHtml.question,
    questionPartHtml.underscores,
    attempts,
    keyboard
  );

  return content;
}

const quizHtml = await getQuizHtml();
export default quizHtml;

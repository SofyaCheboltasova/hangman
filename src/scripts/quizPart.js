/* eslint-disable import/extensions */
import keyboard from "./keyboard.js";
import questionAndAnswer from "./questionAndAnswer.js";

async function createQuizPart() {
  const content = document.createElement("section");
  const attempts = document.createElement("h2");

  content.className = "content";
  attempts.textContent = `5 attempts left`;

  content.append(
    questionAndAnswer.question,
    questionAndAnswer.underscores,
    attempts,
    keyboard,
  );

  return content;
}

const content = await createQuizPart();
export default content;

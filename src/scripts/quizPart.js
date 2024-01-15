/* eslint-disable import/extensions */
import keyboard from "./keyboard.js";
import { questionPartHtml } from "./questionPartHtml.js";
import { attempts } from "./attempts.js";

async function getQuizHtml() {
  const content = document.createElement("section");

  content.className = "content";
  content.append(
    questionPartHtml.question,
    questionPartHtml.answer,
    attempts,
    keyboard
  );

  return content;
}

const quizHtml = await getQuizHtml();
export default quizHtml;

/* eslint-disable import/extensions */
import keyboard from "./scripts/keyboard.js";
import header from "./scripts/header.js";

function createBackground() {
  const { body } = document;
  body.style.backgroundColor = "white";
}
/* TODO: запоминать предыдущий вопрос */
function getRandomQuestion(data) {
  if (data && data.length > 0) {
    const idx = Math.floor(Math.random() * data.length);
    return data[idx];
  }
  throw new Error("No questions found in the data.");
}

async function generateQuestion() {
  let questionsArray;

  await fetch("src/assets/quest&ans/qa.json")
    .then((response) => response.json())
    .then((data) => {
      questionsArray = getRandomQuestion(data);
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return questionsArray;
}

async function createMainSection() {
  const main = document.createElement("main");
  const content = document.createElement("section");
  const gallowsImg = document.createElement("img");
  const question = document.createElement("h2");
  const underscores = document.createElement("div");
  const attempts = document.createElement("h2");

  const qa = await generateQuestion();

  for (let i = 0; i < qa.answer.length; i += 1) {
    const underscore = document.createElement("div");
    underscore.className = "underscore";
    underscores.appendChild(underscore);
  }

  main.className = "main";
  content.className = "content";
  gallowsImg.className = "main__image";
  gallowsImg.src = "src/assets/img/gallows.png";
  gallowsImg.alt = "Gallows image";
  question.textContent = qa.question;
  attempts.textContent = `5 attempts left`;
  underscores.className = "underscores";

  content.append(question, underscores, attempts, keyboard);
  main.append(gallowsImg, content);

  return main;
}

async function createHomePage() {
  const { body } = document;

  const main = await createMainSection();

  body.append(header, main);
}

createBackground();
createHomePage();

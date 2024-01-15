/* eslint-disable import/extensions */
import header from "./scripts/header.js";
import content from "./scripts/quizHtml.js";

async function createMainSection() {
  const main = document.createElement("main");
  const gallowsImg = document.createElement("img");

  main.className = "main";
  gallowsImg.className = "main__image";
  gallowsImg.src = "src/assets/img/gallows.png";
  gallowsImg.alt = "Gallows image";

  main.append(gallowsImg, content);

  return main;
}

async function createHomePage() {
  const { body } = document;

  body.style.backgroundColor = "white";
  const main = await createMainSection();

  body.append(header, main);
}

createHomePage();

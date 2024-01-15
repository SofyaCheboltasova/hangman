/* eslint-disable import/extensions */
import header from "./scripts/header.js";
import content from "./scripts/quizPart.js";

async function createMainSection() {
  const main = document.createElement("main");
  const gallowsImg = document.createElement("div");

  main.className = "main";
  gallowsImg.className = "main__image";

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

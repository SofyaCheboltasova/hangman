/* eslint-disable import/extensions */
import "./styles/main.scss";
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
  const main = await createMainSection();

  body.append(main);
}

createHomePage();

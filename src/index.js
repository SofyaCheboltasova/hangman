function createBackground() {
  const { body } = document;
  body.style.backgroundColor = "white";
}

function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  li.innerText = "Играть заново";
  h2.innerText = "Помоги программисту не потерять работу";

  header.appendChild(h2);
  header.appendChild(nav.appendChild(ul.appendChild(li)));

  return header;
}

function createMainSection() {
  const main = document.createElement("main");
  const content = document.createElement("section");

  main.className = "main";
  content.className = "content";

  const gallowsImg = document.createElement("img");
  gallowsImg.className = "main__image";
  gallowsImg.src = "src/img/gallows.png";
  gallowsImg.alt = "Gallows image";

  const question = document.createElement("p");
  const underscores = document.createElement("div");
  const mistakes = document.createElement("p");
  const keyboard = document.createElement("div");

  underscores.className = "underscores";

  for (let i = 0; i < 4; i += 1) {
    const underscore = document.createElement("div");
    underscore.className = "underscore";
    underscores.appendChild(underscore);
  }

  content.append(question, underscores, mistakes, keyboard);
  main.append(gallowsImg, content);

  return main;
}

function createMainPage() {
  const { body } = document;

  const header = createHeader();
  const main = createMainSection();

  body.append(header, main);
}

createMainPage();
createBackground();

function createBackground() {
  const { body } = document;
  body.style.backgroundColor = "white";
}

function createKeyboardSection(startNumber, keystInSection) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm␡";
  const section = document.createElement("div");
  section.className = "keyboard-line";

  const endNumber = startNumber + keystInSection;

  for (let i = startNumber; i < endNumber; i += 1) {
    const div = document.createElement("div");
    div.className = "keyboard__key";
    div.textContent = alphabet[i];
    section.appendChild(div);
  }
  return section;
}

function createKeyboard() {
  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  const keysInSection = [10, 9, 8];
  let startNumber = 0;

  for (let i = 0; i < keysInSection.length; i += 1) {
    const line = createKeyboardSection(startNumber, keysInSection[i]);
    startNumber += keysInSection[i];
    keyboard.appendChild(line);
  }

  return keyboard;
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
      questionsArray = data;
      return getRandomQuestion(questionsArray);
    })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((randomQuestion) => {
      questionsArray = randomQuestion;
    });
  return questionsArray;
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

async function createMainSection() {
  const main = document.createElement("main");
  const content = document.createElement("section");

  main.className = "main";
  content.className = "content";

  const gallowsImg = document.createElement("img");
  gallowsImg.className = "main__image";
  gallowsImg.src = "src/assets/img/gallows.png";
  gallowsImg.alt = "Gallows image";

  // eslint-disable-next-line no-unused-vars
  const quest = generateQuestion();
  const question = document.createElement("p");
  // question.innerText = quest;

  const underscores = document.createElement("div");
  const mistakes = document.createElement("p");
  const keyboard = createKeyboard();

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

function createHomePage() {
  const { body } = document;

  const header = createHeader();
  const main = createMainSection();

  body.append(header, main);
}

createHomePage();
createBackground();

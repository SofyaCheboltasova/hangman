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
      questionsArray = getRandomQuestion(data);
    })
    .catch((error) => {
      throw new Error(error.message);
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
  const gallowsImg = document.createElement("img");
  const question = document.createElement("h2");
  const underscores = document.createElement("div");
  const attempts = document.createElement("h2");

  const keyboard = createKeyboard();
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

  const header = createHeader();
  const main = await createMainSection();

  body.append(header, main);
}

createHomePage();
createBackground();

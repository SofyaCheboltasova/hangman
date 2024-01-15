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

async function getHtml() {
  const questionAndAnswer = await generateQuestion();
  const question = document.createElement("h2");
  const underscores = document.createElement("div");

  for (let i = 0; i < questionAndAnswer.answer.length; i += 1) {
    const underscore = document.createElement("div");
    underscore.className = "underscore";
    underscores.appendChild(underscore);
  }

  question.textContent = questionAndAnswer.question;
  underscores.className = "underscores";

  return { question, underscores };
}

const questionAndAnswer = await getHtml();
export default questionAndAnswer;

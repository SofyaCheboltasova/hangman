/* TODO: запоминать предыдущий вопрос */
function getRandomQuestion(data) {
  if (data && data.length > 0) {
    const idx = Math.floor(Math.random() * data.length);
    return data[idx];
  }
  throw new Error("No questions found in the data.");
}

async function generateQuestion() {
  let qaPair;

  await fetch("src/assets/quest&ans/qa.json")
    .then((response) => response.json())
    .then((data) => {
      qaPair = getRandomQuestion(data);
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  return qaPair;
}

const qaPair = await generateQuestion();
export default qaPair;

/* TODO: запоминать предыдущий вопрос */
let qaPair = null;

function getRandomQuestion(data) {
  if (data && data.length > 0) {
    const idx = Math.floor(Math.random() * data.length);
    return data[idx];
  }
  throw new Error("No questions found in the data.");
}

function updateIfEqual(oldPair, newPair, data) {
  if (!oldPair) {
    return newPair;
  }

  let updatedPair = newPair;
  while (newPair.answer === qaPair.answer) {
    updatedPair = getRandomQuestion(data);
  }
  return updatedPair;
}

export async function generateQApair() {
  let newQApair;
  await fetch("src/assets/quest&ans/qa.json")
    .then((response) => response.json())
    .then((data) => {
      newQApair = getRandomQuestion(data);
      qaPair = updateIfEqual(qaPair, newQApair, data);
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  console.log("Answer:", qaPair.answer);
  return qaPair;
}

qaPair = await generateQApair();

export async function getQApair() {
  return qaPair;
}

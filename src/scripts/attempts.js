const allAttempts = 6;
let currentAttempts = 6;

function getMistakesCount() {
  return allAttempts - currentAttempts;
}

function areAttemptsEnd() {
  return currentAttempts === 0;
}

function createAttempts() {
  let attempts = document.querySelector("attempts");
  if (!attempts) {
    attempts = document.createElement("h2");
    attempts.className = "attempts";
  }
  attempts.textContent = `${currentAttempts} attempts left`;
  return attempts;
}

const attempts = createAttempts();

function reduceAttempts() {
  if (currentAttempts > 0) {
    currentAttempts -= 1;
    attempts.textContent = `${currentAttempts} attempts left`;
  }
}

export { attempts, reduceAttempts, getMistakesCount, areAttemptsEnd };

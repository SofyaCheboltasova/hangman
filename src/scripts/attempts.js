const allAttempts = 6;
let currentAttempts = 6;

function getMistakesCount() {
  return allAttempts - currentAttempts;
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

    if (currentAttempts === 0) {
      attempts.textContent = "You lost";
    }
  }
}

export { attempts, reduceAttempts, getMistakesCount };

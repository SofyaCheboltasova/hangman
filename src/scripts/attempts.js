let attemptsCount = 6;

function createAttempts() {
  let attempts = document.querySelector("attempts");
  if (!attempts) {
    attempts = document.createElement("h2");
    attempts.className = "attempts";
  }
  attempts.textContent = `${attemptsCount} attempts left`;
  return attempts;
}

const attempts = createAttempts();

function reduceAttempts() {
  if (attemptsCount > 0) {
    attemptsCount -= 1;
    attempts.textContent = `${attemptsCount} attempts left`;

    if (attemptsCount === 0) {
      attempts.textContent = "You lost";
    }
  }
}

export { attempts, reduceAttempts };

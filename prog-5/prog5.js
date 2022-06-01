const btnP1 = document.querySelector("#btn-p1");
const btnP2 = document.querySelector("#btn-p2");
const btnReset = document.querySelector("#btn-reset");
const winningScoreSelect = document.querySelector("#playto");
const displayP1 = document.querySelector(".p1");
const displayP2 = document.querySelector(".p2");
let isGameOver = false;
let scoreP1 = 0;
let scoreP2 = 0;
let winningScore = 3;
btnP1.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP1 += 1;
  }
  if (scoreP1 === winningScore) {
    isGameOver = true;
    displayP1.classList.add("has-text-success");
    displayP2.classList.add("has-text-danger");
    btnP1.disabled = true;
    btnP2.disabled = true;
  }
  displayP1.textContent = scoreP1;
});

btnP2.addEventListener("click", function () {
  if (!isGameOver) {
    scoreP2 += 1;
  }
  if (scoreP2 === winningScore) {
    isGameOver = true;
    displayP1.classList.add("has-text-danger");
    displayP2.classList.add("has-text-success");
    btnP1.disabled = true;
    btnP2.disabled = true;
  }

  displayP2.textContent = scoreP2;
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

btnReset.addEventListener("click", function () {
  isGameOver = false;
  scoreP1 = 0;
  scoreP2 = 0;
  displayP1.textContent = 0;
  displayP2.textContent = 0;
  displayP1.classList.remove("has-text-success", "has-text-danger");
  displayP2.classList.remove("has-text-success", "has-text-danger");
  btnP1.disabled = false;
  btnP2.disabled = false;
});

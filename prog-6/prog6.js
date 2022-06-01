const btnIncrease = document.querySelector(".btn-inc");

const btnReset = document.querySelector(".btn-reset");

const btnDecrease = document.querySelector(".btn-dec");

const heading = document.querySelector(".h1");

let value = 0;

btnIncrease.addEventListener("click", function () {
  value += 1;
  if (value > 0) {
    heading.style.color = "green";
  }
  heading.innerHTML = value;
});

btnDecrease.addEventListener("click", function () {
  value -= 1;
  if (value < 0) {
    heading.style.color = "red";
  }
  heading.innerHTML = value;
});

btnReset.addEventListener("click", function () {
  value = 0;
  if (value === 0) {
    heading.style.color = "black";
  }
  heading.innerHTML = value;
});

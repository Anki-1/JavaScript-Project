const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");

const heading = document.querySelector(".h1");

btn.addEventListener("click", function () {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += colors[Math.floor(Math.random() * colors.length)];
    heading.textContent = `Background Color : ${randomColor}`;
    document.body.style.backgroundColor = randomColor;
  }
});


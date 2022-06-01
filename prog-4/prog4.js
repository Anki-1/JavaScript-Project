const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", function (e) {
  let value = `Welcome,${input.value}`;
  h1.innerText = value;
  if (input.value === "") {
    h1.innerText = "Enter Your Name";
  }
});

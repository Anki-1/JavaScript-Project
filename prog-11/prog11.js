const btns = document.querySelectorAll("button");

const text = document.querySelectorAll(".tex");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    if (category) {
      text.forEach(function (item) {
        item.classList.remove("active");
      });
      const element = document.getElementById(category);
      element.classList.add("active");
    }
  });
});

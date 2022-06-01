const btns = document.querySelectorAll(".drum");

btns.forEach(function (btn) {
  btn.addEventListener("click", createSound);

  function createSound() {
    let btnText = btn.innerHTML;
    
    switch (btnText) {
      case "a":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
      case "b":
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
      case "c":
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
      case "e":
        var audio5 = new Audio("sounds/crash.mp3");
        audio5.play();
        break;

      default:
        console.log(btnText);
        break;
    }
  }
});

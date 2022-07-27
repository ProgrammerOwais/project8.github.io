let mainInput = document.querySelector(".form-input");
let circle1 = document.querySelectorAll(".circle");
// let circle2 = document.querySelector(".circle2");
// let circle3 = document.querySelector(".circle3");
// let circle4 = document.querySelector(".circle4");
let numbers = document.querySelectorAll(".number-btn");

let next = document.querySelector(".next");
function inputRange() {
  if (
    mainInput.value.length == 3 ||
    mainInput.value.length == 8 ||
    mainInput.value.length == 10
  ) {
    mainInput.value += "  ";
  }
}
next.addEventListener("click", () => {
  let phoneNumber = mainInput.value;
});
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    for (let j = 0; j < circle1.length; j++) {
      if (circle1[2].style.backgroundColor == "white") {
        continue;
      }

      circle1[2].style.backgroundColor = "white;";
    }
  });
}

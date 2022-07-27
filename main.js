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
let phoneNumber = "";
next.addEventListener("click", () => {
  phoneNumber += mainInput.value;
});
let mpinNumber = "";
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    if (circle1[0].style.backgroundColor != "white") {
      circle1[0].style.backgroundColor = "white";
      mpinNumber += numbers[i].innerText;
    } else if (circle1[1].style.backgroundColor != "white") {
      circle1[1].style.backgroundColor = "white";
      mpinNumber += numbers[i].innerText;
    } else if (circle1[2].style.backgroundColor != "white") {
      circle1[2].style.backgroundColor = "white";
      mpinNumber += numbers[i].innerText;
    } else if (circle1[3].style.backgroundColor != "white") {
      circle1[3].style.backgroundColor = "white";
      mpinNumber += numbers[i].innerText;
    }
  });
}
setInterval(() => {
  if (mpinNumber.length === 4) {
  }
}, 500);

console.log(mpinNumber);

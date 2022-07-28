let mainInput = document.querySelector(".form-input");
let circle1 = document.querySelectorAll(".circle");
let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let container4 = document.querySelector(".container4");
let submitBtn = document.querySelector(".submit-btn");

// let circle2 = document.querySelector(".circle2");
// let circle3 = document.querySelector(".circle3");
// let circle4 = document.querySelector(".circle4");
let numbers = document.querySelectorAll(".number-btn");
let userData = [];
let next = document.querySelector(".next");
// On Changing the input field of main sec
let inputValues = 0;
function inputRange() {
  if (mainInput.value.length == 9) {
    inputValues = mainInput.value;
  }
  if (mainInput.value.length > 9) {
    mainInput.value = inputValues;
  }
}
let phoneNumber = "";
// On clicking the next button of main sec
next.addEventListener("click", () => {
  if (mainInput.value.length > 8) {
    mainInput.value += "";
    phoneNumber += mainInput.value;
    userData.push("+63 " + phoneNumber);
    container2.style.display = "block";
    container1.style.display = "none";

    let mobileNumber2 = document.querySelector(".number");
    mobileNumber2.innerText = userData[0];
  } else {
    alert("Plz First register your phone number correctly");
  }
});
//\\\\\\\\\\\\\\\\\\\\\\\\ The MPIN CODE AREA
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
      circle1[3].style.backgroundColor = "white"; // by fulfilling the pin circles perform following operations
      mpinNumber += numbers[i].innerText;
      userData.push(mpinNumber);
      let mobileNumber = document.querySelector(".page3-para2");
      mobileNumber.innerText = userData[0];
      container2.style.display = "none";
      container3.style.display = "block";
    }
  });
}
////////////// On page 3 Positioned  the cursor automatically.
function focusChange1() {
  document.getElementById("code2").focus();
}
function focusChange2() {
  document.getElementById("code3").focus();
}
function focusChange3() {
  document.getElementById("code4").focus();
}
function focusChange4() {
  document.getElementById("code5").focus();
}
function focusChange5() {
  document.getElementById("code6").focus();
}
let authCode = "";
submitBtn.addEventListener("click", () => {
  let codes = document.querySelectorAll(".auth-code");
  if (codes[5].value != "") {
    for (let i = 0; i < codes.length; i++) {
      authCode += codes[i].value;
    }
    userData.push(authCode);
    console.log(userData);
    container3.style.display = "none";
    container4.style.display = "block";
  } else {
    alert("Plz first fill the authentication code boxes");
  }
});

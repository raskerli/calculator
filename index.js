var number = "";
var previousNumber = "";
var operator = "";
var resultOfCalc = 0;
function writeNumber(key) {
  if (key == "/" || key == "-" || key == "*" || key == "+") {
    previousNumber = document.querySelector(".result h1").innerHTML;
    operator = key;
    document.querySelector(".result h1").innerHTML = "";
  } else if (key == "=") {
    number = document.querySelector(".result h1").innerHTML;
    calcFunction(previousNumber, number, operator);
  } else if (isNumber(key) || key === ".") {
    document.querySelector(".result h1").innerHTML += key;
  }
}
function isNumber(key) {
  return !isNaN(key);
}
function calcFunction(num1, num2, operator) {
  switch (operator) {
    case "+":
      resultOfCalc = Number(num1) + Number(num2);
      break;
    case "-":
      resultOfCalc = Number(num1) - Number(num2);
      break;
    case "/":
      resultOfCalc = Number(num1) / Number(num2);
      break;
    case "*":
      resultOfCalc = Number(num1) * Number(num2);
      break;
  }
  return (document.querySelector(".result h1").innerHTML = resultOfCalc);
}
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    writeNumber(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  writeNumber(event.key);
});

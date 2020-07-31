var button = document.querySelector(".btn");
var answer = document.getElementById("display");
var calculator = document.querySelector("form");
var operator = document.querySelector(".operator");
var result = calculator.answer;

function display(btn) {
  return (result.value += event.target.value);
}

//checking the condition
function calculations(btn) {
  if (event.target.value === "=") {
    result.value = eval(result.value);
  } else if (event.target.value === "C") {
    result.value = "";
  } else if (event.target.value === "Del") {
    result.value = result.value.slice(0, -1);
  } else {
    result.value = Math.sqrt(result.value);
  }
}

button.addEventListener("click", display);
operator.addEventListener("click", calculations);

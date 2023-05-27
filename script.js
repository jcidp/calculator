let num1;
let operator = "";
let display_value = "";
let display = document.querySelector(".display");

document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", fillDisplay));
document.querySelector("#clear").addEventListener("click", clear);
document.querySelectorAll(".operator").forEach(operator =>
    operator.addEventListener("click", applyOperator));


function fillDisplay(e) {
    console.log(e.target.textContent); //delete this
    display_value += e.target.textContent;
    display.textContent = display_value;
}

function applyOperator(e) {
    if (operator) {
        let result = operate(num1, operator, Number(display_value));
        display_value = result.toString();
        display.textContent = display_value;
    }
    num1 = Number(display_value);
    operator = e.target.textContent === "=" ? "" : e.target.textContent;
    if (operator !== "") display_value = "";
}

function clear(e) {
    display_value = "";
    display.textContent = "0";
    operator = "";
}

function operate(num1, operator, num2) {
    operator_functions = {
        "+": add,
        "-": subtract,
        "x": multiply,
        "÷": divide,
        "=": equals
    }
    return operator_functions[operator](num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function equals(a, b) {
    return
}
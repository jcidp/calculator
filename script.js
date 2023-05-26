let num1 = "";
let operator = "";
let num2 = "";
let display_value = "";
let display = document.querySelector(".display");

document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", fillDisplay));
document.querySelector("#clear").addEventListener("click", clear);

function fillDisplay(e) {
    console.log(e.target.textContent); //delete this
    display_value += e.target.textContent;
    display.textContent = display_value;
}

function clear(e) {
    display_value = "";
    display.textContent = "0";
}

function operate(num1, operator, num2) {
    return operator(num1, num2);
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
let num1 = "";
let operator = "";
let num2 = "";

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
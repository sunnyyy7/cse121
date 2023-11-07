/* Lesson 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    // functionbody
    return number1 + number2;
}

function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);
    document.querySelector('#sum').value = result;
}

document.querySelector('#addNumbers').addEventListener
('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
// functionbody
function divide(number1, number2) {
    return number1 / number2;
}

/* Open Function Use - Divide Numbers */
function divideNumbers() {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}

/* Decision Structure */

/*document.getElementById("year").textContent = new Date().getFullYear(); */
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* BUILT-IN METHODS */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
/* Output Source Array */
document.querySelector('#array').textContent = numbers;
/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbers.filter(number => number % 2);
/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let displayValue = "";

const calculatorContainer = document.querySelector(".calculatorContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const operatorsContainer = document.querySelector(".operatorsContainer");
const otherBtnContainer = document.querySelector(".otherBtnContainer");
const resultButton = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
let display = document.querySelector(".display");


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "ERROR"
    }
    else return firstNumber / secondNumber;
};

function exponential(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
};

function operate(firstNumber, operator, secondNumber) {
    // Use switch instead of if/else
    switch (operator) {
        case "+":
            return (add(firstNumber, secondNumber));
        case "-":
            return (subtract(firstNumber, secondNumber));
        case "*":
            return (multiply(firstNumber, secondNumber));
        case "/":
            return (divide(firstNumber, secondNumber));
        case "**":
            return exponential(firstNumber, secondNumber);
        default:
            return ("error");
    };
};

function disableFloatBtn() {
    document.getElementById("float").disabled = true;
};

function enableFloatBtn() {
    document.getElementById("float").disabled = false;
};

// Function backspace --> quando viene clickato backspace l'ultimo input nel displaValue viene cancellato
function backspace() {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        display.textContent = secondNumber;
    }
    else if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        display.textContent = firstNumber
    };
    enableFloatBtn()
};


// Resetta tutte le variabili svuotandole dei valori precedentemente inseriti
function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    displayValue = "0";
    display.textContent = displayValue;
    enableFloatBtn()
};


// Prende le variabili n1 n2 operator e chiama la funzione operate dandone il risulato
function giveResult() {
    if (firstNumber !== "" && secondNumber !== "" & operator !== "") {
        result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        if (typeof result === "string") {
            displayValue = result;
        }
        else if (result % 1 !== 0) {
            displayValue = result.toFixed(2);
        }
        else {
            displayValue = result;
        };
        display.textContent = displayValue;
        operator = "";
        console.log(result);
    };
    enableFloatBtn()
};

function prepareNewCalculation(e) {
    firstNumber = result;
    secondNumber = "";
    operator = e.target.textContent;
    displayValue = operator;
    result = "";
};

// if result === "" chiede n1, operator e n2 // else clearDisplay  e poi inizia una nuova operazione
function getNumbers(type, CssSelector) {
    numbersContainer.addEventListener(type, e => {
        if (result === "") {
            if (e.target.matches(CssSelector) && operator === "") {
                if (e.target.textContent === "." && firstNumber === "") {
                    firstNumber += "0.";
                }
                else firstNumber += e.target.textContent;

                displayValue = firstNumber;
                display.textContent = displayValue;
                console.log(firstNumber);
            }
            else if (e.target.matches(CssSelector) && operator !== "") {
                if (e.target.textContent === "." && secondNumber === "") {
                    secondNumber += "0.";
                }
                else secondNumber += e.target.textContent;

                displayValue = secondNumber;
                display.textContent = displayValue;
                console.log(secondNumber);
            };
        }
        else {
            clearDisplay()
            if (e.target.textContent === ".") {
                firstNumber += 0 + e.target.textContent;
            }
            else firstNumber += e.target.textContent
            console.log(firstNumber)
            displayValue = firstNumber;
            display.textContent = displayValue;
        };
        if (displayValue.includes(".")) {
            disableFloatBtn()
        }
    });
};


// Refactor: una parte di codice è ripetuta. Crea una funzione?
function getOperators(type, CssSelector) {
    operatorsContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            if (result !== "") {
                prepareNewCalculation(e);
                display.textContent = displayValue;
                console.log(operator);
            }
            else if (secondNumber !== "") {
                giveResult();
                prepareNewCalculation(e);
                console.log(operator);
            }
            else if (firstNumber !== "") {
                operator = e.target.textContent;
                displayValue = operator;
                display.textContent = displayValue;
                console.log(operator);
            };
        };
        enableFloatBtn()
    });
};


getOperators("click", ".btnO");
getNumbers("click", ".btnN");
clearButton.addEventListener("click", clearDisplay)
resultButton.addEventListener("click", giveResult)
backspaceButton.addEventListener("click", backspace)
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let displayValue = "";
const calculatorContainer = document.querySelector(".calculatorContainer");
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
        return "error";
    }
    else return firstNumber / secondNumber;
};

function exponential(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
};

function operate(firstNumber, operator, secondNumber) {
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
    if (result !== "") {
        document.querySelector(".backspace").disabled = true
    }
    else if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        display.textContent = secondNumber;
    }
    else if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        display.textContent = firstNumber
    };
    enableFloatBtn();
};

// Resetta tutte le variabili
function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    displayValue = "0";
    display.textContent = displayValue;
    enableFloatBtn();
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
    };
    enableFloatBtn();
    document.querySelector(".backspace").disabled = false
};

function prepareNewCalculation(newOperator) {
    firstNumber = result;
    secondNumber = "";
    operator = newOperator;
    displayValue = operator;
    result = "";
};

function handleOperators(userInput) {
    if (result !== "") {
        prepareNewCalculation(userInput);
        display.textContent = displayValue;
    }
    else if (secondNumber !== "") {
        giveResult();
        prepareNewCalculation(userInput);
    }
    else if (firstNumber !== "") {
        operator = userInput;
        displayValue = operator;
        display.textContent = displayValue;
    };
    enableFloatBtn();
};

function handleNumbers(userInput) {
    if (result === "") {
        if (operator === "") {
            if (userInput === "." && firstNumber === "") {
                firstNumber += "0.";
            }
            else firstNumber += userInput;
            displayValue = firstNumber;
            display.textContent = displayValue;
        }
        else if (operator !== "") {
            if (userInput === "." && secondNumber === "") {
                secondNumber += "0.";
            }
            else secondNumber += userInput;
            displayValue = secondNumber;
            display.textContent = displayValue;
        };
    }
    else {
        clearDisplay()
        if (userInput === ".") {
            firstNumber += "0.";
        }
        else firstNumber += userInput;
        displayValue = firstNumber;
        display.textContent = displayValue;
    };
    if (displayValue.includes(".")) {
        disableFloatBtn();
    }
};

calculatorContainer.addEventListener("click", (event) => {
    let clickedButton = event.target;
    if (clickedButton.matches(".btnO")) {
        handleOperators(clickedButton.textContent);
    }
    else if (clickedButton.matches(".btnN")) {
        handleNumbers(clickedButton.textContent);
    }
    else if (clickedButton.matches(".clear")) {
        clearDisplay();
    }
    else if (clickedButton.matches(".result")) {
        giveResult();
    }
    else if (clickedButton.matches(".backspace")) {
        backspace();
    };
});

document.addEventListener("keydown", (event) => {
    let keyPressed = event.key.toLowerCase();
    const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const operatorsList = ["+", "-", "*", "/", "**"];
    if (numbersList.includes(keyPressed)) {
        handleNumbers(keyPressed);
    }
    else if (operatorsList.includes(keyPressed)) {
        handleOperators(keyPressed);
    }
    else if (keyPressed === "c") {
        clearDisplay();
    }
    else if (keyPressed === "backspace") {
        backspace();
    }
    else if (keyPressed === "enter") {
        event.preventDefault();
        giveResult();
    };
});
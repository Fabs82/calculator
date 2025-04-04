let n1 = "";
let n2 = "";
let operator = "";
let result = "";
let displayValue = "";

const calculatorContainer = document.querySelector(".calculatorContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const operatorsContainer = document.querySelector(".operatorsContainer");
const otherBtnContainer = document.querySelector(".otherBtnContainer");
const resultButton = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
let display = document.querySelector(".display");


function add(n1, n2) {
    return n1 + n2;
};


function subtract(n1, n2) {
    return n1 - n2;
};


function multiply(n1, n2) {
    return n1 * n2;
};


function divide(n1, n2) {
    if (n2 === 0) {
        return "SNARK SNARK. NO DIVISION BY 0"
    }
    else return n1 / n2;
};


function exponential(n1, n2) {
    return n1 ** n2;
};

function operate(n1, operator, n2) {
    // Use switch instead of if/else
    switch (operator) {
        case "+":
            return (add(n1, n2));
        case "-":
            return (subtract(n1, n2));
        case "*":
            return (multiply(n1, n2));
        case "/":
            return (divide(n1, n2));
        case "**":
            return exponential(n1, n2);
        default:
            return ("error");
    };
};


// Resetta tutte le variabili svuotandole dei valori precedentemente inseriti
function clearDisplay() {
    n1 = "";
    n2 = "";
    operator = "";
    result = "";
    displayValue = "0";
    display.textContent = displayValue;
};


// Prende le variabili n1 n2 operator e chiama la funzione operate dandone il risulato
function giveResult() {
    if (n1 !== "" && n2 !== "" & operator !== "") {
        result = operate(parseFloat(n1), operator, parseFloat(n2));
        if (result % 1 !== 0) {
            displayValue = result.toFixed(2);
        } else {
            displayValue = result;
        };
        display.textContent = displayValue;
        operator = "";
        console.log(result);
    };
};


// if result === "" passa al codice sotto // else clearDisplay poi inizia una nuova operazione
function getNumbers(type, CssSelector) {
    numbersContainer.addEventListener(type, e => {
        if (result === "") {
            if (e.target.matches(CssSelector) && operator === "") {
                n1 += e.target.textContent;
                displayValue = n1;
                display.textContent = displayValue;
                console.log(n1);
            }
            else if (e.target.matches(CssSelector) && operator !== "") {
                n2 += e.target.textContent;
                displayValue = n2;
                display.textContent = displayValue;
                console.log(n2);
            };
        }
        else {
            clearDisplay()
            n1 += e.target.textContent;
            console.log(n1)
            displayValue = n1;
            display.textContent = displayValue;
        };
    });
};


// BUG! Quando ho giá un'operazione e concateno un operator non dá il risultato ma concatena n2+il nuovo numero
function getOperators(type, CssSelector) {
    operatorsContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            if (result !== "") {
                n1 = result;
                result = "";
                n2 = "";
                operator = e.target.textContent;
                displayValue = operator;
                display.textContent = displayValue;
                console.log(operator);
            }
            else if (n1 !== "") {
                operator = e.target.textContent;
                displayValue = operator;
                display.textContent = displayValue;
                console.log(operator);
            };
        };
    });
};

getOperators("click", ".btnO");
getNumbers("click", ".btnN");
clearButton.addEventListener("click", clearDisplay)
resultButton.addEventListener("click", giveResult)
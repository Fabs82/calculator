let n1 = "";
let n2 = "";
let operator = "";
let result = "";
let displayValue = "";

const calculatorContainer = document.querySelector(".calculatorContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const operatorsContainer = document.querySelector(".operatorsContainer");
const otherBtnContainer = document.querySelector(".otherBtnContainer");
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

//console.log(operate(n1, n2, operator));

// Resetta tutte le variabili svuotandole dei valori precedentemente inseriti
function clearDisplay(type, CssSelector, callbackF) {
    otherBtnContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            callbackF();
        };
    });
};

clearDisplay("click", ".clear", () => {
    n1 = "";
    n2 = "";
    operator = "";
    displayValue = "";
    result = "";
    display.textContent = displayValue;
});

// Prende le variabili n1 n2 operator e chiama la funzione operate dandone il risulato
function giveResult(type, CssSelector, callbackF) {
    otherBtnContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            callbackF();
        };
    });
};

giveResult("click", ".result", () => {
    if (n1 !== "" && n2 !== "" & operator !== "") {
        result = operate(parseFloat(n1), operator, parseFloat(n2));
        if (result % 1 !== 0) {
            displayValue = result.toFixed(2);
        } else {
            displayValue = result;
        };
        display.textContent = displayValue;
        operator = "";
        console.log(result)
    };
});



// Creare una funzione getNumbers
// if result === "" passa al codice sotto // else clearDisplay poi inizia una nuova operazione n1 = e.target.textContent displayValue = n1; display.textContent = displayValue;
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
        else { // It works but the code below is already in clearDisplay function. refactor?
            n1 = ""
            n2 = "";
            operator = "";
            displayValue = "";
            result = "";
            n1 += e.target.textContent;
            console.log(n1)
            displayValue = n1;
            display.textContent = displayValue;
        };

    });
};

getNumbers("click", ".btnN");

// Creare una funzione getOperators
function getOperators(type, CssSelector) {
    operatorsContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            if (result !== "") {
                n1 = result;
                n2 = "";
                operator = e.target.textContent;
                displayValue = n1 + operator;
                display.textContent = displayValue;
                console.log(operator);
            }
            else if (e.target.matches(CssSelector) && n1 !== "") {
                operator = e.target.textContent;
                displayValue = operator;
                display.textContent = displayValue;
                console.log(operator);
            };
        };
    });
};

getOperators("click", ".btnO");
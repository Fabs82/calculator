function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    displayValue = "0";
    display.textContent = displayValue;
};


function giveResult() {
    if (firstNumber !== "" && secondNumber !== "" & operator !== "") {
        result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
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


function giveResult() {
    if (firstNumber !== "" && secondNumber !== "" & operator !== "") {
        result = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        switch (result) {
            case ("string"):
                displayValue = result;
                break;
            case (result % 1 !== 0):
                displayValue = result.toFixed(2);
                break
            default:
                displayValue = result
                break;
        };
        display.textContent = displayValue;
        operator = "";
        console.log(result);
    };
};

function prepareNewCalculation(operator) {
    firstNumber = result;
    secondNumber = "";
    operator = e.target.textContent;
    displayValue = operator;
    result = "";
};

prepareNewCalculation(operator)

calculatorContainer.addEventListener("keydown", (event) => {
    console.log(event.key)
})
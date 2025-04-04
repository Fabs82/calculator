function clearDisplay() {
    n1 = "";
    n2 = "";
    operator = "";
    result = "";
    displayValue = "0";
    display.textContent = displayValue;
};


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


giveResult();

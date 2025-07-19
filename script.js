function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return (Math.round(a * b * 100)/100);
}

function divide(a, b) {
    return (Math.round(a / b * 100)/100);
}

function operate(number1, operator, number2) {
    switch (operator) {
        case "add":
            return add(number1, number2);
        case "subtract":
            return subtract(number1, number2);
        case "multiply":
            return multiply(number1, number2);
        case "divide":
            return divide(number1, number2);
    }
}

function indexInput(input) {
    switch (input) {
        // if number
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            input = Number(input);
            // if number1 == null, put it in
            if (number1 == null || justOutput == false) {
                number1 = input;
                display.textContent = number1;
                break;
            }
            // else if operator == null, append number1 ((og number1) * 10) + new number1
            if (operator == null && justOutput == false) {
                number1 = (number1*10) + input;
                display.textContent = number1;
                break;
            }
            // else if number2 == null, put it in
            if (number2 == null) {
                number2 = input;
                display.textContent = number2;
                break;
            }
            // else append number2 ((og number2) * 10) + new number2
            else {
                number2 = (number2*10) + input;
                display.textContent = number2;
                break;
            }
        // if operator
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
            // if number2 != null
            if (number2 != null) {
                // complete operation and then plug that in as the new number1, then put in operation
                number1 = operate(number1, operator, number2);
                display.textContent = number1;
                number2 = null;
                operator = input;
            }
            // if number1 != null, put it in
            if (number1 != null) {
                operator = input;
            }
            break;
        // if equals
        case "equals":
            // operate and then set all variables as null again, number1 = answer
            let answer = null;
            if (number1 != null && operator != null && number2 != null) {
                answer = operate(number1, operator, number2);
                console.log(answer);
                display.textContent = answer;
                justOutput = true;
            }
            number1 = answer, number2 = null, operator = null;
            break;
        // if clear
        case "clear":
            // reset all
            number1 = null, number2 = null, operator = null;
            display.textContent = "";
            break;
    }
    console.log(number1)
    console.log(operator)
    console.log(number2)
}

let number1 = null, operator = null, number2 = null, justOutput = false, input;
const buttons = document.querySelectorAll("button")
const display = document.querySelector("#display")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        indexInput(button.id);
    })
})
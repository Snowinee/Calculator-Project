const screen = document.querySelector('.screen');

// Buttons

const numButton = document.querySelectorAll('.btnNum');
const deleteBtn = document.querySelector('.btnDelete');
const clearBtn = document.querySelector('.btnClear');
const operators = document.querySelectorAll('.btnOperator');

const equalBtn = document.querySelector(".btnEquals");

const clear = () => {
    num = "";
    first = 0;
    second = 0;
    total = 0;
    operatorValue = "";
    previousOperatorValue = "";
    updateScreen();
}

let num = "";
let first = 0;
let second = 0;
let total = 0;
let operatorValue = "";
let previousOperatorValue = "";

const updateScreen = () => {
    const mainDisplay = screen.children[0]
    mainDisplay.innerText = num;
};

numButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        num += e.target.innerText;
        updateScreen();
    });
})

deleteBtn.addEventListener('click', (e) => {
    num = num.slice(0, num.length -1)
    updateScreen();
})

clearBtn.addEventListener('click', (e) => {
    clear()
})

equalBtn.addEventListener('click', (e) => { 
    calculation(operatorValue)
});


const calculation = (operator) => {
    if (first == "") {
        first = parseFloat(num);
    }
    else {
        if (previousOperatorValue != '') {
            operator = previousOperatorValue;
        }

        if (operator == "add") {
            second = parseFloat(num);
            let total = add(first, second);
            first = total;
            num = total;
        }
        else if (operator == "subtract") {
            second = parseFloat(num);
            let total = subtract(first, second);
            first = total;
            num = total;
        }
        else if (operator == "multiply") {
            second = parseFloat(num);
            let total = multiply(first, second);
            first = total;
            num = total;
        }
        else if (operator == "divide") {
            second = parseFloat(num);
            let total = divide(first, second);
            first = total;
            num = total;
        }
    }
    updateScreen();
    num = '';
}

operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText == "+") {
            operatorValue = "add";
        }
        else if (e.target.innerText == "-") {
            operatorValue = "subtract";
        }
        else if (e.target.innerText == "÷") {
            operatorValue = "divide";
        }
        else if (e.target.innerText == "x") {
            operatorValue = "multiply";
        }
        calculation(operatorValue)
        previousOperatorValue = operatorValue;
    });
});

const operator = (operator) => {
    if (operator === 'add') {
        return add(a, b);
    }
    else if (operator === 'subtract') {
        return subtract(a, b);
    }
    else if (operator === 'divide') {
        return divide(a, b);
    }
    else if (operator === 'multiply') {
        return multiply(a, b);
    }
};









const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return (a * b).toFixed(2);
}

const divide = (a, b) => {
    return (a / b).toFixed(2);
}


updateScreen();
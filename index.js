const add = (n1, n2) => console.log(n1 + n2);
const subtract = (n1, n2) => console.log(n1 - n2);
const divide = (n1, n2) => console.log(n1 / n2);
const multiply = (n1, n2) => console.log(n1 * n2);

const operate = (operator, n1, n2) => {
    switch(operator){
        case '+':
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
    }

};

const calcDisplay = document.querySelector('#calc-display');
const clear = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');

// clears current setting
const clearDisplay = () => calcDisplay.textContent = 0;
clear.addEventListener('click', clearDisplay);

// stop calc-display from breaking by limiting digits to 9. this might need to be an event listener on calcDisplay waiting for more than a certain # of digits
//const limit = () => calcDisplay.textContent.length > 9 ? calcDisplay.textContent = 'ERROR' : calcDisplay.textContent = 0;

// adds event listener and sets staging area for operations
digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (calcDisplay.innerHTML == 0) {
            calcDisplay.textContent = digit.innerHTML;
        }
        calcDisplay.insertAdjacentText('beforeend', digit.innerHTML);
    })
});

// grab calcDisplay.value to perform math

//perform operate. will need a lot more functionality in this alone.
equals.addEventListener('click', operate)
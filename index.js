/* eslint-disable default-case */
const calcDisplay = document.querySelector("#calc-display");
const clearBtn = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
let num1 = null;
let num2 = null;
let operator = null;
let shouldResetDisplay = true;

const math = {
  add(oper1, oper2) {
    return Number(oper1) + Number(oper2);
  },
  subtract(oper1, oper2) {
    return oper1 - oper2;
  },
  divide(oper1, oper2) {
    return !(oper1 / oper2).isNaN ? "Error" : oper1 / oper2;
  },
  multiply(oper1, oper2) {
    return oper1 * oper2;
  },
};

const operate = (symbol, n1, n2) => {
  switch (symbol) {
    case "+":
      return math.add(n1, n2);
    case "-":
      return math.subtract(n1, n2);
    case "/":
      return math.divide(n1, n2);
    case "*":
      return math.multiply(n1, n2);
  }
};

const resetDisplay = () => {
  calcDisplay.textContent = "";
};

const clear = () => {
  num1 = null;
  num2 = null;
  operator = null;
  shouldResetDisplay = true;
  calcDisplay.textContent = 0;
};

const setOperator = (symbol) => {
  if (num1 !== null) {
    num2 = calcDisplay.innerHTML;
    // calcDisplay.textContent = Math.round(
    //   (operate(operator, num1, num2) * 1000) / 1000
    // );
    num1 = null;
    shouldResetDisplay = true;
  }

  if (symbol === "+" || symbol === "-") {
    operator = symbol;
  } else if (symbol === "×") {
    operator = "*";
  } else if (symbol === "÷") {
    operator = "/";
  }

  shouldResetDisplay = true;
  num1 = calcDisplay.innerHTML;
};

const appendDec = () => {
  if (!calcDisplay.textContent.includes(".")) {
    calcDisplay.textContent += ".";
    shouldResetDisplay = false;
  }
};

const appendNum = (num) => {
  if (shouldResetDisplay) {
    resetDisplay();
    shouldResetDisplay = false;
  }
  calcDisplay.textContent += num;
};

const calculate = () => {
  if (operator !== null) {
    num2 = calcDisplay.innerHTML;
    calcDisplay.textContent = Math.round(
      (operate(operator, num1, num2) * 1000) / 1000
    );
  }
};

equals.addEventListener("click", calculate);

digits.forEach((digit) => {
  digit.addEventListener("click", () => appendNum(digit.textContent));
});

operators.forEach((oper) => {
  oper.addEventListener("click", () => setOperator(oper.innerHTML));
});

clearBtn.addEventListener("click", clear);

decimal.addEventListener("click", appendDec);

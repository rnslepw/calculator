function add(num1, num2) {
   return num1 + num2;
}

function subtract(num1, num2) {
   return num1 - num2;
}

function multiply(num1, num2) {
   return num1 * num2;
}

function divide(num1, num2) {
   return num1 / num2;
}

let numbers = [];
let currentInput = '';
let operator = '';

const display = document.querySelector('.display');

function operate(numbers, operator) {
  const numbersToInt = numbers.map(num => parseInt(num));
  
  switch(operator) {
    case "+":
      display.textContent = add(...numbersToInt);
      break;
    case "-":
      display.textContent = subtract(...numbersToInt);
      break;
    case "*":
      display.textContent = multiply(...numbersToInt);
      break;
    case "/":
      display.textContent = divide(...numbersToInt);
      break;
    default:
      console.log("Wrong input");
      break;
  }
}

function clear() {
  numbers = [];
  currentInput = '';
  operator = '';
}


const nums = document.querySelectorAll('.num');

nums.forEach(num => {
  num.addEventListener('click', (e) => {
    if (!currentInput && !numbers.length) {
      display.textContent = '';
    }
    currentInput += e.target.textContent;
    display.textContent += e.target.textContent;
  })
})

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
  operand.addEventListener('click', (e) => {
    operator = e.target.textContent;
    display.textContent += e.target.textContent;
    numbers.push(currentInput);
    currentInput = '';
  })
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  numbers.push(currentInput);
  operate(numbers, operator);
  clear();
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  clear();
  display.textContent = '';
})
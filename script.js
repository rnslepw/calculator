function add(num1, num2) {
   return num1 + num2;
}

function subtract(num1, num2) {
   return num1 - num2;
}

function multiply(num1, num2) {
   return (num1 * num2).toFixed(1);
}

function divide(num1, num2) {
   return (num1 / num2).toFixed(1);
}

let numbers = [];
let currentInput = '';
let operator = '';

const display = document.querySelector('.display');

function operate(numbers, operator) {
  const numsToFloat = numbers.map(num => parseFloat(num));
  
  switch(operator) {
    case "+":
      display.textContent = add(...numsToFloat);
      break;
    case "-":
      display.textContent = subtract(...numsToFloat);
      break;
    case "*":
      display.textContent = multiply(...numsToFloat);
      break;
    case "/":
      display.textContent = divide(...numsToFloat);
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
    if (currentInput.includes('.') && e.target.textContent === 
  '.') {
      return;
    }
    currentInput += e.target.textContent;
    display.textContent = currentInput;
  })
})

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
  operand.addEventListener('click', (e) => {
    operator = e.target.textContent;
    
    if (display.textContent) {
      numbers.push(display.textContent);
    } else {
      numbers.push(currentInput);
    };
    
    currentInput = '';
  })
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  numbers.push(currentInput);
  console.log(numbers);
  
  operate(numbers, operator);
  clear();
});

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  clear();
  display.textContent = '';
})
function add(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function subtract(numA, numB) {
  return numA - numB;
}

function multiply(...arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

function power(num, power) {
  return num ** power;
}

function factorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

module.exports = {
  add,
  subtract,
  multiply,
  power,
  factorial,
};

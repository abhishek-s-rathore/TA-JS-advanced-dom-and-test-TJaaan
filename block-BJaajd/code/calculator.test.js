const { add, subtract, multiply, power, factorial } = require('./calculator');

// Tests For Calculator

//add
test('Test for add', () => {
  expect(add(1, 2, 3, 4)).toBe(10); // Positive
});

test('Test for add', () => {
  expect(add(1, 2, 3, 4)).not.toBe(3); // Negative
});

//subtract
test('Test for subtract', () => {
  expect(subtract(4, 2)).toBe(2); // Positive
});

test('Test for subtract', () => {
  expect(subtract(2, 1)).not.toBe(3); // Negative
});

//multiply
test('Test for multiply', () => {
  expect(multiply(1, 2, 3, 4)).toBe(24); // Positive
});

test('Test for multiply', () => {
  expect(multiply(1, 2, 3, 4)).not.toBe(2); // Negative
});

//power
test('Test for power', () => {
  expect(power(4, 2)).toBe(16); // Positive
});

test('Test for power', () => {
  expect(power(4, 3)).not.toBe(12); // Negative
});

//factorial
test('Test for factorial', () => {
  expect(factorial(5)).toBe(120); // Positive
});

test('Test for factorial', () => {
  expect(factorial(4)).not.toBe(16); // Negative
});

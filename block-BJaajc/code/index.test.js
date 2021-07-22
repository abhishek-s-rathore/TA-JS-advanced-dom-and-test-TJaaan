const { getFullName, isPalindrome, circumference, area } = require('./index');

// Test for getFull Name

// Positive test
test('test 1 for getFullName', () => {
  expect(getFullName('Arya', 'Stark')).toBe('Arya Stark');
});

test('test 2 for getFullName', () => {
  expect(getFullName('John', 'Snow')).toBe('John Snow');
});
test('test 3 for getFullName', () => {
  expect(getFullName('Abhishek', 'Rathore')).toBe('Abhishek Rathore');
});

// Negative Test
test('test 4 for getFullName', () => {
  expect(getFullName('John', 'Snow')).not.toBe('JohnSnow');
});
test('test 5 for getFullName', () => {
  expect(getFullName('Arya', 'Stark')).not.toBe('AryaStark');
});
test('test 6 for getFullName', () => {
  expect(getFullName('Abhishek', 'Rathore')).not.toBe('Abhishek  Rathore');
});

// Test for isPalindrome

// Positive test
test('test 1 for isPalindrome', () => {
  expect(isPalindrome(1234321)).toBe(1234321);
});

test('test 2 for isPalindrome', () => {
  expect(isPalindrome(10101)).toBe(10101);
});

test('test 3 for isPalindrome', () => {
  expect(isPalindrome('abcba')).toBe('Enter Valid Input!');
});

// Negative Test
test('test 4 for isPalindrome', () => {
  expect(isPalindrome('1234321')).not.toBe(1234321);
});

test('test 5 for isPalindrome', () => {
  expect(isPalindrome('10101')).not.toBe(10101);
});

test('test 6 for isPalindrome', () => {
  expect(isPalindrome(123454321)).not.toBe('Enter Valid Input!');
});

// Test for circumference

// Positive Test
test('test 1 for circuimference', () => {
  expect(circumference(2)).toBe(`The circuimference is ${12.5663706144}.`);
});

// Negative Test
test('test 2 for circuimference', () => {
  expect(circumference(2)).not.toBe(`12.5663706144`);
});

// Test for area

// Positive Test
test('test 1 for area', () => {
  expect(area(2)).toBe(`The area is ${12.5663706144}.`);
});

// Negative Test
test('test 2 for area', () => {
  expect(area(2)).not.toBe(`12.5663706144`);
});

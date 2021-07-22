function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(number) {
  if (typeof number === 'number') {
    let palind = +number.toString().split('').reverse().join('');
    return palind;
  } else {
    return `Enter Valid Input!`;
  }
}

function circumference(radius) {
  return `The circuimference is ${2 * radius * 3.1415926536}.`;
}

function area(radius) {
  return `The area is ${3.1415926536 * radius * radius}.`;
}

module.exports = {
  getFullName,
  isPalindrome,
  circumference,
  area,
};

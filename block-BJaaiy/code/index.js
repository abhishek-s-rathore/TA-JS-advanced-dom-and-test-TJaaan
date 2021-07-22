const moment = require("moment");
const lodash = require("lodash");

//==========Using Moment.============//
document.write(moment().format("MMMM Do YYYY, h:mm:ss a "));
document.write(`<br>`);
document.write(moment().format("dddd"));
document.write(`<br>`);
document.write(moment().format("MMM Do YY"));
document.write(`<br>`);
document.write(moment("2020-01-01", "YYYY-MM-DD", true).isValid());
document.write(`<br>`);
document.write(moment("2020-14-01", "YYYY-MM-DD", true).isValid());
document.write(`<br>`);
document.write(moment().add(7, "days").calendar());
document.write(`<br>`);
document.write(moment().add(7, "months").calendar());
document.write(`<br>`);
document.write(moment().add(7, "years").calendar());
document.write(`<br>`);
document.write(moment().subtract(7, "days").calendar());
document.write(`<br>`);
document.write(moment().subtract(7, "months").calendar());
document.write(`<br>`);
document.write(moment().subtract(7, "years").calendar());
document.write(`<br>`);
var date1 = moment("{2014-11-11}", "YYYY-MM-DD");
var date2 = moment("{2015-09-11}", "YYYY-MM-DD");
document.write(date2.diff(date1, "days"));
document.write(`<br>`);
var date3 = moment("{2014-11-27}", "YYYY-MM-DD");
var date4 = moment("{2015-09-16}", "YYYY-MM-DD");
document.write(date4.diff(date3, "days"));
document.write(`<br>`);
document.write(moment("2020-01-01").isAfter("2018-01-01"));
document.write(`<br>`);
document.write(moment("2010-01-01").isAfter("2018-01-01"));
document.write(`<br>`);
document.write(moment([2019]).isLeapYear());
document.write(`<br>`);
document.write(moment([2020]).isLeapYear());
//==========Using Lodash.============//

let array1 = [0, false, 1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 5, 6, 7, 8];

//Array methods
console.log(lodash.chunk(array1, 2));
console.log(lodash.difference(array1, array2));
console.log(lodash.compact(array1));
console.log(lodash.concat(array1, array2, "Abhi", [22, [1, 1]]));
console.log(lodash.drop(array2, 2));

// Collection methods
console.log(lodash.countBy([6.1, 4.2, 6.3], Math.floor));
let lastItem = lodash.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1;
});
console.log(lastItem);

function duplicate(n) {
  return [n, n];
}
console.log(lodash.flatMap(array2, duplicate));

function duplicate2(n) {
  return [[[n, n]]];
}

console.log(lodash.flatMap([1, 2], duplicate2, 2));

console.log(lodash.groupBy([6.1, 4.2, 6.3], Math.floor));

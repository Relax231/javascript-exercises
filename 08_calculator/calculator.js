const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let array = [...arr];
  return array.reduce((summe, current) => summe + current, 0);
};

const multiply = function (arr) {
  let array = [...arr];

  return array.length
    ? array.reduce((summe, current) => summe * current, 1)
    : 0;

  // let result = array[0];
  // for (let i = 1; i < array.length; i++) {
  //   result *= array[i];
  // }
  // return result;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

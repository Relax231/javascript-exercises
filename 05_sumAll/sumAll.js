const sumAll = function (number1, number2) {
  let sum = 0;

  if (
    Number.isInteger(number1) &&
    Number.isInteger(number2) &&
    number1 >= 0 &&
    number2 >= 0
  ) {
    if (number1 < number2) {
      for (number1; number1 <= number2; number1++) {
        sum += number1;
      }
    } else {
      for (number2; number2 <= number1; number2++) {
        sum += number2;
      }
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// (1,4)
//=1+2+3+4=10
// Do not edit below this line
module.exports = sumAll;

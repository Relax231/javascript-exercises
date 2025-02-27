// const leapYears = function (inputYear) {
//   let year = parseInt(inputYear);

//   if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const leapYears = (year) => {
//   return year % 100 === 0 && year % 400 === 0
//     ? true
//     : year % 100 === 0
//     ? false
//     : year % 4 === 0
//     ? true
//     : false;
// };

const leapYears = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;

// // >divisible by four (like 1984 and 2004).
//years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false

//if % 4  = leapyear
//if % 100 = not
//if % 100 and 400 = yes

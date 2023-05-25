const reverseString = function (myString) {
  //   let splittet = myString.split("");
  //   let reversed = splittet.reverse();
  //   let joinedArr = reversed.join("");  .join() default would be , seperatet

  return myString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

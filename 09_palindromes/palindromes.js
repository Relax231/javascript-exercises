// const palindromes = function (string) {
//   let bereinigt = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   const array = [...bereinigt];
//   const reversed = [...array].reverse(); //... or slice damit kopie und nicht reference
//   let isPalindrome = true;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== reversed[i]) {
//       isPalindrome = false;
//       break;
//     }
//   }
//   return isPalindrome;
// };

const palindromes = function (string) {
  let bereinigt = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return bereinigt == bereinigt.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

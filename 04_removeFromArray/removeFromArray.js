// the spread operator ...args puts all input numbers into an array.
const removeFromArray = function (arr, ...args) {
  //copy the array
  let newArr = [...arr];
  // for of uses values  and the for in uses keys
  for (arg of args) {
    let removeIndex = newArr.indexOf(arg); //find the index with value
    //if not found it returns -1
    if (removeIndex !== -1) {
      //splice modifies the arr
      newArr.splice(removeIndex, 1); //remove 1 item at index. we dont need the removed value so we dont assign this to a new variable
    }
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// Arr1[1,2,3,4,5]

/*
Write a function called same, which accepts two arrays 
The function should return rue if every value in the array has it's corresponding value 
squared in the second array. The frequency of values must be the same

same([1,2,3],[4,1,9]) // true 
same([1,2,3],[1,9]) // false 
same([1,2,1],[4,4,1]) //false 

*/

function same(array1, array2) {
  if (array1.length != array2.length) return false;
  //Try to use frequency counter
  frequencyCounter = {};
  squaredArray = array1.forEach((item) => {
    squaredItemString = String(item ** 2);
    if (!(squaredItemString in frequencyCounter)) {
      frequencyCounter[squaredItemString] = 1;
    } else {
      frequencyCounter[squaredItemString] += 1;
    }
  });

  for (const item of array2) {
    if (String(item) in frequencyCounter) {
      frequencyCounter[String(item)] -= 1;
    }
  }

  let isSame = true;
  for (const prop in frequencyCounter) {
    if (frequencyCounter[prop] != 0) {
      isSame = false;
      break;
    }
  }
  return isSame;
}
console.log(same([1, 2, 3], [1, 4, 9])); // Expected: true
console.log(same([1, 2, 3], [9, 4, 1])); // Expected: true (order doesn't matter)
console.log(same([1, 2, 3], [1, 9])); // Expected: false (missing one square)
console.log(same([1, 2, 2], [1, 4, 4])); // Expected: true (frequency matches)
console.log(same([1, 2, 2], [1, 4, 9])); // Expected: false (extra wrong value)
console.log(same([], [])); // Expected: true (both arrays empty)
console.log(same([], [1])); // Expected: false (extra value in second array)
console.log(same([3, 3, 3], [9, 9, 9])); // Expected: true
console.log(same([3, 3, 3], [9, 9])); // Expected: false (missing one 9)
console.log(same([2, 3], [4, 9, 9])); // Expected: false (extra 9)

//solved the problem completely on my own

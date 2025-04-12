/**
 * capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const capitalizedWord = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  arr.shift();
  return [capitalizedWord, ...capitalizeFirst(arr)];
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//Resolved completely by myself

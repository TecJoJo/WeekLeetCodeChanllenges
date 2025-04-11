/**
 * 
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
 */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr,cb){
    if(arr.length ===1) return cb(arr[0])
    const shallowCopy = [...arr]
    arr.pop()
    return cb(shallowCopy[shallowCopy.length-1]) || someRecursive(arr,cb)
  }


//Solve the problem completely by myself 
/**
 * 
flatten
Write a recursive function called flatten which accepts 
an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr){
    //base case 
    if(typeof arr === "number")return [arr] 
    if(arr.length===0)return []

    const deepCopyArr = JSON.parse(JSON.stringify(arr))
    arr.shift()

    return [...flatten(deepCopyArr[0]),...flatten(arr)]
  }
  
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) )// [1,2,3


//solved the problem completely by myself without receiving any help or hint from web searching or AI searching! Proud of myself! 
/*
Write a function called same, which accepts two arrays 
The function should return rue if every value in the array has it's corresponding value 
squared in the second array. The frequency of values must be the same

same([1,2,3],[4,1,9]) // true 
same([1,2,3],[1,9]) // false 
same([1,2,1],[4,4,1]) //false 

*/

function same(array1, array2) {
//   for (item of array1) {
//     const index = array2.indexOf(item ** 2);
//     if (index != -1) {
//       array2.splice(index, 1);
//     }
//   }

//   if (array2.length > 0) {
//     return false;
//   } else {
//     return true;
//   }

for(let i=0;i<array1.length;i++){
    const foundIndex = array2.indexOf(array1[i]**2)
    if(foundIndex<0)return false 
    else{
        array2.splice(foundIndex,1)

    }
}
if (array2.length>0){
    return false 
} 
else{
    return true 
}
}
console.log(same([1, 2, 3], [1, 4, 9]));     // Expected: true
console.log(same([1, 2, 3], [9, 4, 1]));     // Expected: true (order doesn't matter)
console.log(same([1, 2, 3], [1, 9]));        // Expected: false (missing one square)
console.log(same([1, 2, 2], [1, 4, 4]));     // Expected: true (frequency matches)
console.log(same([1, 2, 2], [1, 4, 9]));     // Expected: false (extra wrong value)
console.log(same([], []));                   // Expected: true (both arrays empty)
console.log(same([], [1]));                  // Expected: false (extra value in second array)
console.log(same([3, 3, 3], [9, 9, 9]));     // Expected: true
console.log(same([3, 3, 3], [9, 9]));        // Expected: false (missing one 9)
console.log(same([2, 3], [4, 9, 9]));        // Expected: false (extra 9)



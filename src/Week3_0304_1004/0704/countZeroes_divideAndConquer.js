// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeroes_divideAndConquer(arr){
    let middleIndex 
    let start = 0
    let end = arr.length -1
   while(true){
    middleIndex = Math.floor((end - start)/2+start)
    if(arr[middleIndex]===0){
        //middle number is 0 we seek for 1, look left 
        end = middleIndex
        
    }
    if(arr[middleIndex]===1){
        //middle number is 1 we seek for 0,look right 
        start = middleIndex
    }
    //base case
    if(end===start+1 && arr[start] !==arr[end]){
        //we found the edge
        return arr.length - end 
    }
    if(end===start+1 && arr[start] ===arr[end]){
        return arr[start] ===0?arr.length:0
    }
   }
}


// Time Complexity - O(log n)

module.exports = { countZeroes_divideAndConquer };


//solved completely by myself 

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(list,count){
    let start = 0
    let end = count-1
    let sum = 0
    let maxSum = 0
    if(list.length===0 || count > list.length) return null
    //Count the first possible sum
    for(let i =0; i<count; i++){
        sum += list[i]

    }
    maxSum = sum

    while(end < list.length -1){
        //we slide the window to right
        start +=1
        end += 1 
        const newSum = sum - list[start-1] + list[end]
        maxSum = newSum>maxSum?newSum:maxSum
        sum = newSum
    }

    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null


//Solved completely by myself. 
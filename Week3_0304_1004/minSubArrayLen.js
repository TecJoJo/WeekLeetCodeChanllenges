// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)



function minSubArrayLen(arr,num){
    if(arr.length ===0) return 0
    let minLen = 1
    while(minLen <= arr.length){
        let startIndex = 0
        let endIndex = minLen-1
        let sum = arr.slice(0,endIndex+1).reduce((previous,curr)=>previous+curr,0)
        while(endIndex+1 < arr.length){
            //we calculate the sum after the sliding 
            const valueToSubtract = arr[startIndex]
            const valueToAdd = arr[endIndex+1]
            sum = sum - valueToSubtract + valueToAdd
            //we slide the window to right by 1
            startIndex +=1
            endIndex +=1
            //if sum is higher or equal to the target number
            //we want to return the value and end this function 
            if(sum >= num) return minLen


        }
        minLen += 1 
    }
    return 0


}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0


//Solve this question completely on my own 
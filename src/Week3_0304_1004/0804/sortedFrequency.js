// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)


function sortedFrequency(arr,targetNum){
    let startIndex = 0 
    let endIndex = arr.length -1
    let middleLeftIndex 
    let middleRightIndex

    if(arr[arr.length-1] < targetNum) return -1
    while(true){
        if(middleLeftIndex || middleRightIndex){
            tempIndexLeft = Math.floor((middleLeftIndex - startIndex)/2 +startIndex)

            if(arr[tempIndexLeft] === targetNum){
                if(middleLeftIndex -1 === startIndex){
                    continue
                }
                middleLeftIndex = tempIndexLeft
            }else{
                startIndex = tempIndexLeft
            }
            tempIndexRight = Math.floor((endIndex - middleRightIndex)/2 +startIndex)
            
            if(arr[tempIndexRight] === targetNum){
                if(endIndex -1 === middleRightIndex){
                    continue
                }
                middleRightIndex = tempIndexRight
            }else{
                endIndex = tempIndexRight
            }

           
            

            if(middleLeftIndex -1 === startIndex &&endIndex -1 === middleRightIndex){
                return endIndex - startIndex
            }


        }else{
            const tempNumIndex =Math.floor((endIndex - startIndex)/2 +startIndex) 
            if(arr[tempNumIndex]===targetNum){
                middleLeftIndex = tempNumIndex
                middleRightIndex = tempNumIndex
            }else{
                //temp number is not target number 
                if(arr[tempNumIndex] < targetNum){
                    //if temp number is smaller, meaning we are can set the startIndex to this position
                    startIndex = tempNumIndex
                }else{
                    //if temp number is bigger, meaning we are can set the endIndex to this position
                    endIndex = tempNumIndex
                }
            }
            
        }
    }
}


console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1



//AI is not able to continue with my thinking pattern and fix the infinite loop, it keeps
//increment by 1 in the range which is stupid in my opinion, saying if we have 
//5x10* 100000 we will never able to find the edge. 
//i don't have time anymore for continue this, and have to move on
//Problem stayed unsolved. 
/**

Frequency Counter - findAllDuplicates
Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
Time Complexity - O(n)
 */


function findAllDuplicates(list){
    const frequencyCounter = {}
    const result = []
    for(const num of list){
        if(frequencyCounter[num]){
            frequencyCounter[num]+=1
            if(frequencyCounter[num] ===2){
                result.push(num)
            }
        }else{
            frequencyCounter[num] = 1
        }
    }
    return result
    
  }


//Solved completely by myself
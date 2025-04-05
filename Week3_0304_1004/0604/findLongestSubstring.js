// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)


function findLongestSubstring(str){
    if(str==="")return 0
    //I am gonna solve this with multiple pointer
    const frequencyCounter = {}
    let pointerA = 0
    let pointerB = 0 
    let hasDuplication = false
    let maxLen = 1
    while (pointerB<str.length){
        if(!hasDuplication){

            frequencyCounter[str[pointerB]] = frequencyCounter[str[pointerB]]?frequencyCounter[str[pointerB]]+1:0
            if(frequencyCounter[str[pointerB]]>1){
                hasDuplication = true
            }
            pointerB++
        }
        else{
            

            if(frequencyCounter[str[pointerA]]>1){
                //we found the duplication starting letter
                hasDuplication = false
            }
            //-->
            //pointer a is going to erase the letter in the path
            frequencyCounter[[str[pointerA]]] -= 1
            //then pointerA move forward 
            pointerA ++
        }
        maxLen = pointerB - pointerA +1 > maxLen ? pointerB - pointerA +1 : maxLen

    }

    



}
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

            frequencyCounter[str[pointerB]] = frequencyCounter[str[pointerB]]?frequencyCounter[str[pointerB]]+1:1
            if(frequencyCounter[str[pointerB]]>1){
                hasDuplication = true
            }
            //we update the maxLen only if no duplication is detected 
            if(!hasDuplication){
                maxLen = pointerB - pointerA+1 > maxLen ? pointerB - pointerA +1 : maxLen
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
        

    }

    return maxLen



}

function findLongestSubstringSlideWindow(str){
    //the basic idea is we increment the length and slide then we increment and then slide
    const uniqueLetterSet = new Set()
    let currLen = 1
    let maxLen = 1
    let endIndex = 0
    let startIndex = 0
    while(endIndex<str.length){
        const currSlice = str.slice(startIndex,endIndex+1)
        //we validate the duplication using the set
        // currSlice.foreach(letter=>uniqueLetterSet.add(letter))
        for(let i of currSlice){
            uniqueLetterSet.add(i)
        }
        if(uniqueLetterSet.size !== currSlice.length){
            //we found the duplication 

            
            //move the endIndex to left by one notch 
            endIndex -= 1 

            //slide the window to right 
            startIndex += 1 
            endIndex += 1
            
        }else{

            //we extend the window
            endIndex += 1 
        }
        maxLen = currSlice > maxLen?currSlice:maxLen
    }

    return maxLen


}


// console.log(findLongestSubstringSlideWindow(''));// 0
console.log(findLongestSubstringSlideWindow('rithmschool')) // 7
console.log(findLongestSubstringSlideWindow('thisisawesome')) // 6
console.log(findLongestSubstringSlideWindow('thecatinthehat') )// 7
console.log(findLongestSubstringSlideWindow('bbbbbb') )// 1
console.log(findLongestSubstringSlideWindow('longestsubstring')) // 8
console.log(findLongestSubstringSlideWindow('thisishowwedoit')) // 6


//Solved completely by myself!!!!
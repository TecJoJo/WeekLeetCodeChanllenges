/**

Frequency Counter - constructNote
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true
 */

function constructNote(message,letters){

    //frequencyCounter track quantities are needed for each letter to construct the letter 
    const frequencyCounter = {}

    for(const letter of message){
        if(letter in frequencyCounter){
            frequencyCounter[letter] += 1
        }
        else{
            frequencyCounter[letter] = 1
        }
    }
    for(const letter of letters){
        if(frequencyCounter[letter] && frequencyCounter[letter]>0){
            frequencyCounter[letter] -=1
        }
    }
    for(const prop in frequencyCounter){
        if(frequencyCounter[prop]!==0){
            return false
        }
    }
    return true 
}

//solved completely by myself
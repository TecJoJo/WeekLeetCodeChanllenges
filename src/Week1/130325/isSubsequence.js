/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/


function isSubsequence(str1,str2) {
    //a is pointer pointing the letter in str2
    let a = 0
    let foundLetter = false 
    for(let i =0; i < str1.length; i++){
        while(true){
            if(str2[a] === str1[i]){
                //we found the letter, 
                foundLetter = true
                //we move the pointer a to right
                a +=1
                break
            }else{
                //we didn't found the letter
                foundLetter = false 
                //we didn't found the letter, we move the pointer a to right 
                a +=1
            }
        }
    }
    return foundLetter
}


//solved compelely by mysel

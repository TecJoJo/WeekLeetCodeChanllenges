/* 
Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed by rearraging the letters 
of another, such as cinema, formed from iceman
*/

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;
  const frequencyCounter = {};
  for (const char of str1) {
    if (char in frequencyCounter) {
      frequencyCounter[char] + 1;
    } else {
      frequencyCounter[char] = 1;
    }
  }

  for (const char of str2) {
    if (char in frequencyCounter) {
      frequencyCounter[char] -= 1;
    }
  }

  for (const prop in frequencyCounter) {
    if (frequencyCounter[prop] != 0) return false;
  }

  return true;
}

// Test Case 1:
// "cinema" rearranged becomes "iceman"
console.log(anagram("cinema", "iceman")); // Expected: true

// Test Case 2:
// "restful" rearranged becomes "fluster"
console.log(anagram("restful", "fluster")); // Expected: true

// Test Case 3:
// Different lengths: "hello" vs "helloo"
console.log(anagram("hello", "helloo")); // Expected: false

// Test Case 4:
// Different letters: "hello" vs "bello"
console.log(anagram("hello", "bello")); // Expected: false

// Test Case 5:
// Case sensitivity: "Hello" and "hello" are different if case sensitive
console.log(anagram("Hello", "hello")); // Expected: false

// Test Case 6:
// Both strings empty
console.log(anagram("", "")); // Expected: true

// Test Case 7:
// One string empty, one non-empty
console.log(anagram("", "a")); // Expected: false

// Test Case 8:
// "triangle" rearranged becomes "integral"
console.log(anagram("triangle", "integral")); // Expected: true

// Test Case 9:
// "apple" cannot be rearranged to "pale" (missing p and length differ)
console.log(anagram("apple", "pale")); // Expected: false

// Test Case 10:
// "listen" rearranged becomes "silent"
console.log(anagram("listen", "silent")); // Expected: true

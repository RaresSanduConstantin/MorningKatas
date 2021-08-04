/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript

*/

function isPangram(string) {
  //...
  let arr = string.split('').sort();
  let obj = {};
  arr.forEach((char) => {
    char.toLowerCase();
    if (char === ' ' || char === '.' || char === '!' || char === '/') {
      return;
    }

    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  });
  let size = Object.keys(obj).length;
  if (size > 25) {
    return true;
  } else {
    return false;
  }
}

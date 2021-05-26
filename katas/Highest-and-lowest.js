/* 
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:


https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript
*/

function solve(arr) {
  const result = [];
  const aChar = 97;
  arr.forEach((word) => {
    result.push(
      Array.from(word.toLowerCase()).filter(
        (e, i) => e.charCodeAt(0) - aChar === i
      ).length
    );
  });
  return result;
}

// solutin 2
function solve(arr) {
  return arr.map((x) =>
    [...x.toLowerCase()].reduce((s, v, i) => s + (v.charCodeAt() == i + 97), 0)
  );
}

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  
  Example:
  
  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"
   */
function highAndLow(numbers) {
  const n = numbers.split(' ').map((e) => +e);
  return Math.max(...n) + ' ' + Math.min(...n);
}

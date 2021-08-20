/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

codewars.com/kata/57eb8fcdf670e99d9b000272/solutions

*/

function high(x) {
  let arr = x.toLowerCase().split(' ');
  let sum = 0;
  let holder = 0;
  let holder2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i].charCodeAt(j) - 96;
    }

    if (sum > holder) {
      holder = sum;
      holder2 = i;
    }
    sum = 0;
  }

  return arr[holder2];
}

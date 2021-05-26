/* 
kata 18.05.2021

https://www.codewars.com/kata/5bb148b840196d1be50000b1/train/javascript

Intro:
I was doing a coding challenge. It was one of those multi-step challenges. I don't know if my approach was good or bad, but in one of these steps I was writing a function to convert word to numbers. I did it.. eventually, but... I didn't like how it was written. So I thought why not create kata and check how other people do it :) So:

Task:
Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.

Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
Number can NOT start with 0
Same letters share the same digit regardless of case
For empty string return 0
Examples:
"A" -> 1 - OK

"ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

"ABA" -> 333 - WRONG ( different letters map to same digits )

"ABA" -> 357 - WRONG ( same letters map to different digits )
*/

function convert(s) {
  if (s.length === 0) return 0;
  let arr = s.split('');
  const letters = {};

  arr.forEach((letter, i) => {
    if (letters[letter] === undefined) {
      letters[letter] = 0;
    }
    letters[letter]++;
  });
}

/* kata 19.05.2021

*/

function convert(s) {
  if (s.length === 0) return 0;
  let letters = {};
  let start = 2;

  let result = [];
  let arr = s.toLowerCase().split('');
  arr.forEach((e, i) => {
    console.log(letters);
    if (i === 0) {
      letters[e] = 1;
    } else if (i === 1) {
      letters[e] = 0;
    } else {
      letters[e] = start++;
    }
  });

  arr.forEach((x) => {
    result.push(letters[x].toString());
  });

  return parseInt(result.join(''), 10);
}

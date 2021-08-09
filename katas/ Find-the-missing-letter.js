/* 

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

*/

function findMissingLetter(array) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let litereArray = array.toString().toLowerCase().split(',');

  let last = [...litereArray].pop();
  let diff = alphabet.slice(
    alphabet.indexOf(litereArray[0]),
    alphabet.indexOf(last) + 1
  );

  let difference = diff.filter((x) => !litereArray.includes(x));
  let letter = difference[0];
  var u = array[0].toUpperCase();
  let check = array[0].toLowerCase() === u ? -1 : array[0] === u ? 1 : 0;

  return check === 0 ? letter : letter.toUpperCase();
}

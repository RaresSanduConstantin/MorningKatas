/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

*/

function alphabetPosition(text) {
  let lowertext = text.toUpperCase();
  let res = [];
  for (var i = 0; i < lowertext.length; i++) {
    let position = lowertext.charCodeAt(i) - 64;
    if (position > 0 && position < 27) res.push(position);
  }
  return res.join(' ');
}

/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

*/

function toCamelCase(str) {
  if (str === '') return '';

  let arrDash = str.split('_');
  let arrUnderScore = str.split('-');
  let res = [];

  if (arrUnderScore.length < arrDash.length) {
    res.push(arrDash[0]);
    arrDash.slice(1).forEach((word, i) => {
      console.log(i);
      res.push(word[0].toUpperCase() + word.substring(1));
    });
  } else {
    res.push(arrUnderScore[0]);
    arrUnderScore.slice(1).forEach((word) => {
      res.push(word[0].toUpperCase() + word.substring(1));
    });
  }
  return res.join('');
}

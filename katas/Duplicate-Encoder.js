/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

*/

function duplicateEncode(word) {
  // ...
  let letters = word.toLowerCase().split('');

  let obj = {};
  let res = [];
  letters.forEach((letter) => {
    obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
  });

  letters.map((el) => {
    if (obj[el] > 1) {
      res.push(')');
      return;
    }
    return res.push('(');
  });
  return res.join('');
}

function duplicateEncode(word) {
  // ...
  let letters = word.toLowerCase().split('');
  let res = [];

  letters.forEach((el) => {
    let spliced = letters.slice(letters.indexOf(el) + 1);
    console.log(el);
    if (spliced.indexOf(el) == -1) {
      res.push('(');
    } else res.push(')');
  });
  console.log('s', res);
  return res.join('');
}

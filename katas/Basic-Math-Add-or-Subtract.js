/* Kata 28.04.2021 

Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

https://www.codewars.com/kata/5809b62808ad92e31b000031
*/

function calculate(str) {
  //your code here...
  let arr = str.split('');
  let num = [];
  let operations = {};
  let obj = {};
  let sum = 0;
  let prevIndex = 0;

  arr.forEach((char, i) => {
    let parsed = parseInt(char);

    if (!isNaN(parsed)) {
      obj[char] = i;
    }
  });

  for (const [key, value] of Object.entries(obj)) {
    if (value === 0) {
      sum = sum + key;
    } else if (value - prevIndex === 5) {
      sum = sum + key;
    } else {
      sum = sum - key;
    }
  }

  return sum.toString();
}

function calculate(str) {
  const replacePlus = str.replace(/plus/g, '+');
  const replaceMinus = replacePlus.replace(/minus/g, '-');

  return eval(replaceMinus).toString();
}

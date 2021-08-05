/* 
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript

*/

function narcissistic(value) {
  // Code me to return true or false
  let res = [];
  let arr = value.toString().split('');

  arr.forEach((num) => {
    let sum = parseInt(num) ** arr.length;
    res.push(sum);
  });
  if (res.reduce((acc, cur) => acc + cur, 0) === value) {
    return true;
  } else {
    return false;
  }
}

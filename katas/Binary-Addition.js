/* 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:

add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)

https://www.codewars.com/kata/551f37452ff852b7bd000139
*/

function addBinary(a, b) {
  let sum = a + b;

  return sum.toString(2);
}

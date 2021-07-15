/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

*/

var countBits = (n) => n.toString(2).split('').map(el => parseInt(el)).reduce((acc,curr) => acc+curr, 0);
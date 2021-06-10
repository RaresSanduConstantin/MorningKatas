/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

*/

function findOdd(arr) {
  let obj = {};

  arr.forEach((el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  });

  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 !== 0) return Number(key);
  }
}

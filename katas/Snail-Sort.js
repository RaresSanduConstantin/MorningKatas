/* 
  
  Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
  */

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//varianta 1
const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//varianta 1
const snail = (array) => {
  debugger;
  let finalArray = [];
  while (array.length) {
    finalArray.push(...array.shift());
    for (var i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    finalArray.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      finalArray.push(array[i].shift());
    }
  }
  return finalArray;
};
// snail(array)
//varianta 2

const snail = (arr) => {
  var finalArray = [];
  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map((row) => finalArray.push(row.pop()));
    arr.reverse().map((row) => row.reverse());
  }
  return finalArray;
};

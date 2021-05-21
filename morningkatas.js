/* 
Kata - 21.04.2021

Word to binary

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]

*/
function wordToBin(str){
    //code away!!!
    let arr = str.split('')
    return arr.map(char => {
      return '0' + char.charCodeAt(0).toString(2)
    })
  }
    
  //   Matematica binari in 8 bites
  //  return   arr.map(char => {
  // let bite = new Array(8).fill(0)
  //     let asciiCode = char.charCodeAt(0);
  //     bite.forEach((elm, i) => {
  //     if(Math.pow(2, i) < asciiCode){
  //       asciiCode = asciiCode - Math.pow(2, i)
  //       console.log(asciiCode)
  //       elm++;
  //     }
  //     }
  //   )
  //     return bite.join('')
  //   })
  
  
/* 
Kata - 22.04.2021

Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/  

function solution(nums){
  if(!nums){
    return []
  } else {
    return nums.sort((a, b) => a-b)
  }
  }

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
  */

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//varianta 1
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//varianta 1
const snail = (array) =>{
debugger
  let finalArray = []
  while(array.length){
    finalArray.push(...array.shift())
    for (var i = 0; i < array.length; i++){
      finalArray.push(array[i].pop())
    }
    finalArray.push(...(array.pop() || []).reverse())
    for (var i = array.length -1; i >= 0; i--){
      finalArray.push(array[i].shift())
    }
  }
  return finalArray
}
// snail(array)
//varianta 2

const snail = (arr) => {
  var finalArray = [];
  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map(row => finalArray.push(row.pop()))
    arr.reverse().map(row => row.reverse());
  }
  return finalArray
}

/* 
Kata - 26.04.2021
Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
function cleanString(s) {
	let arr = []
  
  s.split('').forEach(char => {
    if(char === '#'){
      arr.pop()
    } else {
    arr.push(char)
    }
  })
  
  return arr.join('');
};

/* 
Most profit from stock quotes

 Return the most profit from stock quotes.

 Stock quotes are stored in an array in order of date. The stock profit is the difference in prices in buying and selling stock. Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing. Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.

@param {array} quotes
@return {number} max profit
Example:

 [ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 [ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
 [ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)

*/

function getMostProfitFromStockQuotes(quotes) {
  let max = Math.max(...quotes)
  let i = 0;
  let profit = 0;
  
   while(quotes[i]<max){
     profit = profit + (max - quotes[i])
     i++;
   }
  
  return profit
}

/* Kata 27.04.2021 */

function getMostProfitFromStockQuotes(quotes) {
  let maxProfit = 0;
  let maxStockPrice = Math.max(...quotes);
  let maxStockIndex = quotes.indexOf(maxStockPrice);

  function calculateMaxProfit(arr, _maxStockPrice, _maxStockIndex) {
    for ( let i = 0; i < _maxStockIndex; i++) {
      maxProfit = maxProfit + (_maxStockPrice - arr[i]);
    }
    let newArr = arr.slice(_maxStockIndex + 1);
    _maxStockPrice = Math.max(...newArr);
    _maxStockIndex = newArr.indexOf(_maxStockPrice);
    if (newArr.length > 1) {
      calculateMaxProfit(newArr, _maxStockPrice, _maxStockIndex);
    }
  }

  calculateMaxProfit(quotes, maxStockPrice, maxStockIndex)
  return maxProfit;
}

//asd

function getVowels(srt){
  let vowelsCount = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  str.split('').forEach(letter =>{
    if(vowels.includes(letter)){
      vowelsCount++
    }
  })

  return vowelsCount
}

/* 
Kata - 21.04.2021

Word to binary

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]

*/
function wordToBin(str){
  //code away!!!
  let arr = str.split('')
  return arr.map(char => {
    return '0' + char.charCodeAt(0).toString(2)
  })
}
  
//   Matematica binari in 8 bites
//  return   arr.map(char => {
// let bite = new Array(8).fill(0)
//     let asciiCode = char.charCodeAt(0);
//     bite.forEach((elm, i) => {
//     if(Math.pow(2, i) < asciiCode){
//       asciiCode = asciiCode - Math.pow(2, i)
//       console.log(asciiCode)
//       elm++;
//     }
//     }
//   )
//     return bite.join('')
//   })


/* 
Kata - 22.04.2021

Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/  

function solution(nums){
if(!nums){
  return []
} else {
  return nums.sort((a, b) => a-b)
}
}

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
*/

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//varianta 1
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//varianta 1
const snail = (array) =>{
debugger
let finalArray = []
while(array.length){
  finalArray.push(...array.shift())
  for (var i = 0; i < array.length; i++){
    finalArray.push(array[i].pop())
  }
  finalArray.push(...(array.pop() || []).reverse())
  for (var i = array.length -1; i >= 0; i--){
    finalArray.push(array[i].shift())
  }
}
return finalArray
}
// snail(array)
//varianta 2

const snail = (arr) => {
var finalArray = [];
while (arr.length) {
  finalArray.push(...arr.shift());
  arr.map(row => finalArray.push(row.pop()))
  arr.reverse().map(row => row.reverse());
}
return finalArray
}

/* 
Kata - 26.04.2021
Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
function cleanString(s) {
let arr = []

s.split('').forEach(char => {
  if(char === '#'){
    arr.pop()
  } else {
  arr.push(char)
  }
})

return arr.join('');
};

/* 
Most profit from stock quotes

 Return the most profit from stock quotes.

 Stock quotes are stored in an array in order of date. The stock profit is the difference in prices in buying and selling stock. Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing. Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.

@param {array} quotes
@return {number} max profit
Example:

[ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
[ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
[ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)

*/

function getMostProfitFromStockQuotes(quotes) {
let max = Math.max(...quotes)
let i = 0;
let profit = 0;

 while(quotes[i]<max){
   profit = profit + (max - quotes[i])
   i++;
 }

return profit
}

/* Kata 27.04.2021 */

function getMostProfitFromStockQuotes(quotes) {
let maxProfit = 0;
let maxStockPrice = Math.max(...quotes);
let maxStockIndex = quotes.indexOf(maxStockPrice);

function calculateMaxProfit(arr, _maxStockPrice, _maxStockIndex) {
  for ( let i = 0; i < _maxStockIndex; i++) {
    maxProfit = maxProfit + (_maxStockPrice - arr[i]);
  }
  let newArr = arr.slice(_maxStockIndex + 1);
  _maxStockPrice = Math.max(...newArr);
  _maxStockIndex = newArr.indexOf(_maxStockPrice);
  if (newArr.length > 1) {
    calculateMaxProfit(newArr, _maxStockPrice, _maxStockIndex);
  }
}

calculateMaxProfit(quotes, maxStockPrice, maxStockIndex)
return maxProfit;
}

function getVowels(srt){
let vowelsCount = 0
let vowels = ['a', 'e', 'i', 'o', 'u']
str.split('').forEach(letter =>{
  if(vowels.includes(letter)){
    vowelsCount++
  }
})

return vowelsCount
}

/* Kata 28.04.2021 

Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

function calculate(str) {
//your code here...
  let arr =str.split('')
  let num = []
  let operations = {}
  let obj = {}
  let sum = 0;
  let prevIndex = 0;
  
  
  arr.forEach((char,i) => {
    let parsed = parseInt(char);
    
    if(!isNaN(parsed)){
      obj[char] = i
    
    } 

  })
  
  for( const [key, value] of Object.entries(obj)){
    
    if(value === 0) {
      sum = sum + key
    } else if(value - prevIndex === 5){
      sum = sum + key
    } else {
      sum = sum - key
    }
  }
  
  
return sum.toString();
}


function calculate(str) {
  const replacePlus = str.replace(/plus/g, '+');
  const replaceMinus = replacePlus.replace(/minus/g, '-');
 
  return eval(replaceMinus).toString();
}

/* 
Kata 04.05.2021

Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.

Now imagine there is a sequence which follows these rules:

None of the people have their arms raised at first
Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
The first 10 steps of the sequence represented as a table are:

Step   P1   P2   P3
--------------------
 0     0    0    0
 1     1    0    0
 2     2    0    0
 3     0    1    0
 4     1    1    0
 5     2    1    0
 6     0    2    0
 7     1    2    0
 8     2    2    0
 9     0    0    1
*/

const getPositions = s => {
  
  let array = [0, 0, 0];
  
  array[0] = s % 3;
  array[1] = Math.floor(s / 3) % 3;
  array[2] = Math.floor(s / 9) % 3; 
  
  return array;
}

/* 
Kata 05.05.2021

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str){
  if (str.length % 2 !== 0) {
  str = str + '_';
  }
  
  
  let regx = str.match(/..?/g);
  
  if (str === '') {
  regx = [];
  }
  
  
   
  
  return regx;
  }


/* Kata 06.05.2021
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  const numbers = Array.from(n.toString());
  return parseInt(numbers.sort((a,b)=>{
    return b-a;
  }).join(''))
}

/* 
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:
*/

function solve(arr){
  const result = []
  const aChar = 97
  arr.forEach((word)=> {
    result.push(Array.from(word.toLowerCase()).filter((e,i)=>(e.charCodeAt(0) - aChar === i)).length)
  })
  return result
};

// solutin 2
function solve(arr) {  
  return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}

/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */
function highAndLow(numbers){
  const n = numbers.split(' ').map((e)=> +e)
  return Math.max(...n) + ' ' + Math.min(...n)
}

/* kata 07.05.2021
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/
function sumTriangularNumbers(n) {
  if(n<0) return 0;
  let triangularNums = []
  for(let i = 0; i <= n; i++){
      let a = (i*(i+1))/2
      triangularNums.push(a)
  }
  
  return triangularNums.reduce((acc,curr) => acc+curr, 0)
}

/* 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:

add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
  let sum = a + b;
   
   return sum.toString(2)
 }

 /* Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1. */

function mygcd(x,y){
  //your code here
  if(!y) return x;
  return mygcd(y, x%y) 
}

/* Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner. */

// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort()
}

/* 
Kata 10.05.2021

Task
Given a matrix, find its submatrix obtained by deleting the specified rows and columns.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers.

1 ≤ matrix.length ≤ 10,

1 ≤ matrix[0].length ≤ 10,

0 ≤ matrix[i][j] ≤ 9.

[input] integer array rowsToDelete

Array of indices (0-based) of rows to be deleted.

0 ≤ rowsToDelete.length ≤ 5,

0 ≤ rowsToDelete[i] < matrix.length.

[input] integer array columnsToDelete

Array of indices (0-based) of columns to be deleted.

0 ≤ columnsToDelete.length ≤ 5,

0 ≤ columnsToDelete[i] < matrix[0].length.

[output] 2D integer array

Example
For

matrix = [
[1, 0, 0, 2], 
[0, 5, 0, 1], 
[0, 0, 3, 5]
]
rowsToDelete = [1] and columnsToDelete = [0, 2]
the output should be

[ [0, 2], [0, 5] ]
*/

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  //coding and coding..
  if (rowsToDelete.length > 0) {
      for (let k = 0; k < rowsToDelete.length; k++) {
       matrix.splice(rowsToDelete[k], 1, undefined);
       matrix[k] = matrix[k].filter(el => el !== undefined );
    }
    
  } 

 

  
  if (columnsToDelete.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < columnsToDelete.length; j++) {
        matrix[i].splice(columnsToDelete[j], 1, undefined);
      }
      matrix[i] = matrix[i].filter(el => el !== undefined );
    }
  }
    console.log('test',matrix);

 

  return matrix;
}

 

/* 
matrix =
[
[3,8,8,7,5,7], 
[1,5,6,8,2,7], x
[6,1,3,7,8,3], x
[3,7,5,7,0,0],
[2,5,1,7,3,0],
[6,4,4,8,9,5], x
[3,5,5,2,5,3], x
[4,5,5,2,2,5], 
[6,4,2,5,5,3]  x
]
 */
let newArr =
        matrix.filter((rowElement, rowIndex) => {
          return rowsToDelete.indexOf(rowIndex) < 0;
        }).map((e, i) => {
          e = e.filter((colElement, colIndex) => {
            return columnsToDelete.indexOf(colIndex) < 0;
          });
          return e;
        });
/* 
kata 11.05.2021
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

function shorter_reverse_longer(a,b){
  let longer = b;
  let shorter = a

  if (a.length === b.length || a.length > b.length) {
    longer = a;
    shorter = b;
  }

  return shorter + longer.split('').reverse().join('') + shorter;
}

/* 
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
  let nums = []
for (let i = 0; i < list.length; i++) {
    let previous = list[i - 1];
    let current = list[i];
    let next = list[i + 1];

  console.log('prev', previous, 'curr', current, 'next', next)
  
}
//   console.log(nums)
}

/* 
kata 12.05.2021
Coding Meetup #14 - Higher-Order Functions Series - Order the food
*/

function orderFood(list) {
  // thank you for checking out the Coding Meetup kata :)
  let resp = {
    vegetarian: 0,
    standard: 0,
    vegan: 0
  };
 
  list.forEach(dev => {
    if (!resp[dev.meal]) {
      resp[dev.meal] = 0;
    }
      resp[dev.meal]++;
  });
 
//   { vegetarian: 2, standard: 1, vegan: 1 }
return resp;
}

/* Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse? */
function isLanguageDiverse(list) {  // thank you for checking out the Coding Meetup kata :)
  // thank you for checking out the Coding Meetup kata :)
 let resp = {
   Python: 1,
   Ruby: 2,
   JavaScript: 4 //x2
 };

 list.forEach(dev => {
   if (!resp[dev.language]) {
     resp[dev.language] = 0;
   }
     resp[dev.language]++;
 });

for (const [key, value] of Object.entries(resp)) {   
  
}
console.log(resp);
// return resp;
}

/* kata 13.05.2021 */

function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  let resp = {
    Python: 0,
    Ruby: 0,
    JavaScript: 0 //x2
  };
 

  list.forEach(dev => {
    if (!resp[dev.language]) {
      resp[dev.language] = 0;
    }
      resp[dev.language]++;
  });
 
  let arr = [];

  arr = Object.keys(resp).map(key => resp[key])
 
  return Math.min(...arr) *2 >= Math.max(...arr);
   
}

/* 

*/

// TODO: complete this object/class

 

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

 

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

 

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

 

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < this.pageCount()) {
    return this.itemsPerPage;
  } else if (pageIndex === this.pageCount()) {
    return this.pageCount() % this.itemsPerPage
  } else {
    return -1;
  }  
}

 

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex > this.itemCount) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
}

// TODO: complete this object/class

 // https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

 

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

 

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

 

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < 0 ) return -1;
  if (pageIndex > this.pageCount() - 1) return -1;
  
  if (pageIndex < this.pageCount() - 1) {  // 1 < 2
    return this.itemsPerPage; // 4
  } else if (pageIndex === this.pageCount() - 1) {
    return this.pageCount() % this.itemsPerPage 
  } else {
    return -1;
  }  
}

 

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (this.itemCount === 0 || itemIndex === 0) return -1;
  if (itemIndex < 0 || itemIndex > this.itemCount) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
}

/* 
kata 17.05.2021


*/

// one liners

function PaginationHelper(collection, itemsPerPage){
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}

/* 
kata 18.05.2021

https://www.codewars.com/kata/5bb148b840196d1be50000b1/train/javascript

Intro:
I was doing a coding challenge. It was one of those multi-step challenges. I don't know if my approach was good or bad, but in one of these steps I was writing a function to convert word to numbers. I did it.. eventually, but... I didn't like how it was written. So I thought why not create kata and check how other people do it :) So:

Task:
Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.

Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
Number can NOT start with 0
Same letters share the same digit regardless of case
For empty string return 0
Examples:
"A" -> 1 - OK

"ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

"ABA" -> 333 - WRONG ( different letters map to same digits )

"ABA" -> 357 - WRONG ( same letters map to different digits )
*/

function convert(s) {
  if(s.length === 0) return 0;
  let arr = s.split('');
  const letters = {};
  
  arr.forEach((letter, i) => {
    if(letters[letter] === undefined){
    letters[letter] = 0
    }
    letters[letter]++;
    
  })
  

}

/* kata 19.05.2021

*/

function convert(s) {
 
  if(s.length === 0) return 0;
  let letters = {}
  let start = 2;
  
  let result = []
  let arr = s.toLowerCase().split('')
  arr.forEach((e, i) => {
    console.log(letters)
    if(i===0) {
      letters[e] = 1
    } else if(i===1) {
      letters[e] = 0
    } else {
      letters[e] = start++;      
    }})
  
  arr.forEach((x) => {
    result.push(letters[x].toString())
  })

 

    return parseInt(result.join(''), 10)
}

/* kata 20.05.2021
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
*/
function firstNonConsecutive (arr) {
  
  for(var i=0; i <= arr.length; i++ ){
    if( ( arr[i + 1] - arr[i] ) > 1 || arr[i+1] -arr[i] < -1){
      return arr[i+1]
    }
    
  }
  return null
}

/* kata 21.05.2021

https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
*/
function smallEnough(a, limit){
  let filterResult = a.filter(num => num <= limit)
  
 return filterResult.length < a.length ?   false : true
  
  
}
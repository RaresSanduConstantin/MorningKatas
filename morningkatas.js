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
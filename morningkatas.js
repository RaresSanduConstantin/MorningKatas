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
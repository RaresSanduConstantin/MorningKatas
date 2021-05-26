/* 
Kata 05.05.2021

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
*/

function solution(str) {
  if (str.length % 2 !== 0) {
    str = str + '_';
  }

  let regx = str.match(/..?/g);

  if (str === '') {
    regx = [];
  }

  return regx;
}

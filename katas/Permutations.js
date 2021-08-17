/* 
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

*/

function permutations(str) {
  if (str.length === 0) return '';
  if (str.length === 1) return str.split('');
  let result = [];
  let cc = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    for (let j = 0; j < remainingChars.length; j++) {
      let un = permutations(remainingChars)[j];

      if (un === undefined) {
        cc.push(currentChar + un);
      } else {
        result.push(currentChar + un);
      }
    }
  }
  let set = new Set(result);

  let uniqueItems = [...new Set(result)];

  return uniqueItems;
  Ï;
}

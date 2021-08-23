/* 
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

*/

function list(names) {
  //your code here

  if (!names.length) return '';

  if (names.length === 1) return names[0].name;

  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;

  let lastTwo = names.slice(-2).map((n) => n.name);
  let rest = names.slice(0, names.length - 2).map((n) => n.name);

  return `${rest.join(', ')}, ${lastTwo.join(' & ')}`;
}


const list = names => names.reduce((prev, current, index, array) => (prev + current.name) + (index=== array.length -2  ? ' & ' :  index!==array.length-1 ? ', ' : '' ) ,'')
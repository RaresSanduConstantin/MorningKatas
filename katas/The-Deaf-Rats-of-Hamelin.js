/* 
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

*/

var countDeafRats = function (town) {
  let regSpace = /\s/g;
  let defRats = 0;
  let cleanStr = town.replace(regSpace, '');

  let [left, right] = cleanStr.split('P');
  let arrLeft = [];
  for (let i = 0; i < left.length; i = i + 2) {
    arrLeft.push(left[i] + left[i + 1]);
  }
  let arrRight = [];
  for (let i = 0; i < right.length; i = i + 2) {
    arrRight.push(right[i] + right[i + 1]);
  }

  arrLeft.forEach((el) => {
    if (el === 'O~') defRats++;
  });
  arrRight.forEach((el) => {
    if (el === '~O') defRats++;
  });
  return defRats;
};

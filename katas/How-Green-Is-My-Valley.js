/* 

https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
*/

function makeValley(arr) {
  let result = [];
  let a = arr.sort((a, b) => {
    return a - b;
  });

  a.map((num, i) => {
    if (i % 2 === 0) {
      result.push(num);
    } else {
      result.unshift(num);
    }
  });

  if (a.length % 2 === 0) {
    return result;
  } else {
    return result.reverse();
  }
}

const makeValley = (arr) => [
  ...arr.sort((a, b) => b - a).filter((_, idx) => !(idx % 2)),
  ...arr.filter((_, idx) => idx % 2).reverse(),
];

/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

*/

function digital_root(n) {
  let calc = (arr) => {
    return arr.reduce((acc, curr) => {
      let accumulator = parseInt(acc);
      let currentNumber = parseInt(curr);

      return accumulator + currentNumber;
    }, 0);
  };

  let str = ('' + n).split('');
  let sum = calc(str);

  if (sum <= 9) {
    console.log(sum);
    return sum;
  } else {
    let sumArr = ('' + sum).split('');
    console.log(sumArr);
    return calc(sumArr);
  }
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

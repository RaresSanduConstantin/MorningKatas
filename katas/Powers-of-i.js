/* i is the imaginary unit, it is defined by i²=−1i² = -1i²=−1, therefore it is a solution to x²+1=0x² + 1 = 0x²+1=0.

Your Task
Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, as a string (answer may contain iii).
https://www.codewars.com/kata/5a97387e5ee396e70a00016d/train/javascript
*/

function pofi(n) {
  let i;

  if (n % 4 === 1) {
    i = 'i';
  } else if (n % 4 === 3) {
    i = '-i';
  } else if (n % 4 === 2) {
    i = '-1';
  } else if (n % 4 === 0) {
    i = '1';
  }

  return i;
}

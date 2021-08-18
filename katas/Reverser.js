/* 
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys

               https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/train/javascript   

*/

function reverse(n) {
  // your code here
  let rev = 0;
  while (n) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}

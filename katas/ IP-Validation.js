/* 
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string


https://www.codewars.com/kata/515decfd9dcfc23bb6000006/javascript

*/

function isValidIP(str) {
  let arr = str.split('.');

  let res = [];
  arr.forEach((char) => {
    let num = parseInt(char);
    if (num < 256 && num >= 0) {
      if (
        char.match(/^0[0-9].*$/) !== null ||
        char.match(/^[0-9]*$/) === null
      ) {
        return;
      }
      res.push(num);
    }
  });
  if (res.length === 4) return true;
  return false;
}

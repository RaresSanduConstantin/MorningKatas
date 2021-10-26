/* 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

*/

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  // return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1

  var root1;
  var nextroot;
  if (Math.sqrt(sq) % 1 === 0) {
    root1 = Math.sqrt(sq);
    nextroot = root1 + 1;
  } else {
    return -1;
  }
  return nextroot * nextroot;
}

/* 
Multiplicative Persistence

Multiply all the digits of a nonnegative integer n by each other, repeating with the product until a single digit is obtained. The number of steps required is known as the multiplicative persistence.

Create a function that calculates the individual results of each step, not including the original number, but including the single digit, and outputs the result as a list/array. If the input is a single digit, return an empty list/array.

Examples
per(1)  = []

per(10) = [0]
// 1*0 = 0

per(69) = [54, 20, 0]
// 6*9 = 54 --> 5*4 = 20 --> 2*0 = 0

per(277777788888899) = [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
// 2*7*7*7*7*7*7*8*8*8*8*8*8*9*9 = 4996238671872 --> 4*9*9*6*2*3*8*6*7*1*8*7*2 = 4478976 -->
*/

function per(num) {
  var times = 0;
  num = num.toString();
  let persistor = [];
  while (num.length > 1) {
    times++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
    persistor.push(num);
  }
  return persistor.map((el) => parseInt(el));
}

describe('Tests', () => {
  it('test', () => {
    Test.assertDeepEquals(per(1), []);
    Test.assertDeepEquals(per(10), [0]);
    Test.assertDeepEquals(per(69), [54, 20, 0]);
    Test.assertDeepEquals(
      per(277777788888899),
      [
        4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54,
        20, 0,
      ]
    );
  });
});

/* Other solutions
  function per(n) {
  let res = []
  while(n.toString().length > 1) {
    n = n.toString().split('').reduce(
      (p,c) => p * c
    )
    res.push(n)
  }
  return res
}

const per = n =>
  n > 9 ? [n = [...`${n}`].reduce((pre, val) => pre * val, 1), ...per(n)] : [];

  
  function per( n ) {
  const arr = n => [...[]+n];
  const out=[]
  while(n > 9){
    n = arr(n).reduce((a,b)=> a * b, 1)
    out.push(n)
  }
return out 
}
  
  */

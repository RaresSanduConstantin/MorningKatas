/* 
Ones' Complement

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.

https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript

*/

function onesComplement(n) {
    // your code here
    const numsArray = n.split('');
    const solution = [];
    
    numsArray.forEach(num => {
      if( num === '0'){
        solution.push('1')
      } else if(num === '1'){
        solution.push('0')
      } else {
        return
      }
    })
    
    return solution.join('')
  };


  /* 
  
  Tests:
  describe("Tests", () => {
  it("test", () => {
Test.assertEquals(onesComplement("0"), "1");
Test.assertEquals(onesComplement("1"), "0");
Test.assertEquals(onesComplement("01"), "10");
Test.assertEquals(onesComplement("10"), "01");
Test.assertEquals(onesComplement("1101"), "0010");
  });
});

  */
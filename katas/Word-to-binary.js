/* 
Kata - 21.04.2021

Word to binary

Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]

https://www.codewars.com/kata/59859f435f5d18ede7000050
*/

function wordToBin(str){
    //code away!!!
    let arr = str.split('')
    return arr.map(char => {
      return '0' + char.charCodeAt(0).toString(2)
    })
  }
    
  //   Matematica binari in 8 bites
  //  return   arr.map(char => {
  // let bite = new Array(8).fill(0)
  //     let asciiCode = char.charCodeAt(0);
  //     bite.forEach((elm, i) => {
  //     if(Math.pow(2, i) < asciiCode){
  //       asciiCode = asciiCode - Math.pow(2, i)
  //       console.log(asciiCode)
  //       elm++;
  //     }
  //     }
  //   )
  //     return bite.join('')
  //   })
  
  
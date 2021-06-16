/* 
Task.

Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints

Ignore dots.

Example:

.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5

https://www.codewars.com/kata/59bd84b8a0640e7c49002398/train/javascript

*/

function tArea(tStr) {
  let dotArr = tStr.split('\n').filter((e) => e);
  let baza = dotArr[dotArr.length - 1].split('.').filter((e) => e).length;
  console.log(baza, dotArr);
  return (baza * baza) / 2;
}

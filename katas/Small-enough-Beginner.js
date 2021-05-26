/* kata 21.05.2021

https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
*/
function smallEnough(a, limit) {
  let filterResult = a.filter((num) => num <= limit);

  return filterResult.length < a.length ? false : true;
}

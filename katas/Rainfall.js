/* kata 26.05.2021

dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.
Examples:
mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)
Notes:
if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)
Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.
Shell tests only variance
A ref: http://www.mathsisfun.com/data/standard-deviation.html
data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com


https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript

*/

function getCity(str) {
  let citys = {};
  let arrObj = str.split(/\r?\n/);
  arrObj.forEach((item) => {
    const [key, val] = item.split(':');
    let a = val.split(',');
    let nums = [];
    a.forEach((num) => {
      let a = num.slice(num.indexOf(' '), num.length);
      nums.push(parseFloat(a));
    });
    citys[key] = nums;
  });
  return citys;
}

function mean(town, strng) {
  let resp = getCity(strng);
  if (!resp[town]) {
    return -1;
  }
  const sum = resp[town].reduce((acc, curr) => acc + curr, 0);
  return sum / resp[town].length;
}
function variance(town, strng) {
  let resp = getCity(strng);

  if (!resp[town]) {
    return -1;
  }

  let mean_sum = mean(town, strng);

  console.log(Math.pow(resp[town][0] - mean_sum, 2));
  const sum = resp[town].reduce(
    (acc, curr) => acc + Math.pow(curr - mean_sum, 2),
    0
  );
  return sum / resp[town].length;
}

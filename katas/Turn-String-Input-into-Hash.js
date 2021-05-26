/* 
  kata 25.05.2021
Turn String Input into Hash
Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}

https://www.codewars.com/kata/52180ce6f626d55cf8000071
  */

function strToHash(str) {
  // ...
  let resp = {};
  let arr = str.split(',').map((item) => item.trim());

  if (str.length) {
    arr.forEach((item, index) => {
      let equalIndex = item.indexOf('=');
      let num = item.slice(equalIndex + 1, item.length);
      let key = item.slice(0, equalIndex);

      console.log(item, num, key);

      resp[key] = parseInt(num);
    });
  }

  console.log('resp', resp);
  return resp;
}

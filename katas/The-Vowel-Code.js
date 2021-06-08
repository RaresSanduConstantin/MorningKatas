/* 
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

*/

function pattern(item) {
  let test = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  if (test.hasOwnProperty(item)) {
    return test[item];
  } else {
    return item;
  }
}

function encode(string) {
  let newStr = [];
  Array.from(string).map((el) => {
    newStr.push(pattern(el));
  });
  console.log(newStr.join(''));
  return newStr.join('');
}

function patternNumbertoVowel(item) {
  let test = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  if (test.hasOwnProperty(item)) {
    return test[item];
  } else {
    return item;
  }
}

function decode(string) {
  let newStr = [];
  Array.from(string).map((el) => {
    newStr.push(patternNumbertoVowel(el));
  });
  console.log(newStr.join(''));

  return newStr.join('');
}

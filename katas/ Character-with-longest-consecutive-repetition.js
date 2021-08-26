/* 
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)

https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

*/
function longestRepetition(s) {
  let res = '';
  let count = 1;
  let max = 0;
  let news = s.split('');
  for (let i = 1; i <= news.length; i++) {
    if (news[i] === news[i - 1]) {
      count++;
    } else {
      if (count > max) {
        max = count;
        res = news[i - 1];
      }
      count = 1;
    }
  }
  console.log(max, res);
  return [res, max];
}

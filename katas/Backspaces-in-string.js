/* 
Kata - 26.04.2021
Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
*/
function cleanString(s) {
  let arr = [];

  s.split('').forEach((char) => {
    if (char === '#') {
      arr.pop();
    } else {
      arr.push(char);
    }
  });

  return arr.join('');
}

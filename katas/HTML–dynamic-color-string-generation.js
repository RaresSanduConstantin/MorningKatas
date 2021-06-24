/* 
Generate a valid randomly generated rgb color string. Assume all of them have 6 digits always.

Valid Output
#ffffff
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7

https://www.codewars.com/kata/56f1c6034d0c330e4a001059/javascript
*/

var generateColor = function () {
  // show em the code!

  let randomColor = () => {
    let a = Math.floor(Math.random() * 16777215).toString(16);
    return `#${a}`;
  };
  if (randomColor().match(/^#(?:[0-9a-f]{3}){1,2}$/i)) return randomColor();
  return randomColor();
};

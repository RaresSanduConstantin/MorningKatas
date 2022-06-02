/* 
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
*/

String.prototype.isUpperCase = function() {
    // your code here
    const pattern = /^[A-Z!@#.\$%\^\&*\s+]*$/;
    
    
    return pattern.test(this.toString())
  }

/* 
others:

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

String.prototype.isUpperCase = function() {
  return this.search(/[a-z]/g) == -1;
}

*/
/* 
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String

Input >> Output Examples
(balanced-num 7) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digit (0)

and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

(balanced-num 295591) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (11)

and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

Note : The middle digit(s) are 55 .

(balanced-num 959) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (9)

and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

Note : The middle digit is 5 .

(balanced-num 27102983) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (10)

and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced

Note : The middle digit(s) are 02 .

https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript


*/

function balancedNum(number) {
  let strNum = number.toString();
  if (strNum.length == 1 || strNum.length == 2) {
    return 'Balanced';
  }

  let arrNums = strNum.split('');
  let left = [];
  let right = [];
  let result = [];

  if (arrNums.length % 2 != 0) {
    for (let i = 2; i > 0; i--) {
      result.push(arrNums.splice(0, Math.ceil(arrNums.length / i)));
    }
    result[0].pop();
    left = result[0];
    right = result[1];
  } else {
    for (let i = 2; i > 0; i--) {
      let a = arrNums.splice(0, Math.ceil(arrNums.length / i));
      left.push(a[0]);
      right.push(a[1]);
    }
  }
  let sumLeft = left
    .map((el) => parseInt(el))
    .reduce((acc, curr) => acc + curr, 0);
  let sumRight = right
    .map((el) => parseInt(el))
    .reduce((acc, curr) => acc + curr, 0);

  console.log('inainte de if', sumLeft, sumRight);

  if (sumLeft == sumRight) {
    console.log('balanced', sumLeft, sumRight);

    return 'Balanced';
  } else {
    console.log('not balanced', sumLeft, sumRight);

    return 'Not Balanced';
  }
}

/* 
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

*/

function score(dice) {
  // Fill me in!
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;
  let six = 0;
  let score = 0;

  for (let i = 0; i <= dice.length; i++) {
    if (dice[i] == 6) {
      six++;
    }
    if (dice[i] == 5) {
      five++;
    }
    if (dice[i] == 4) {
      four++;
    }
    if (dice[i] == 3) {
      three++;
    }
    if (dice[i] == 2) {
      two++;
    }
    if (dice[i] == 1) {
      one++;
    }
  }
  console.log(one, two, three, four, five, six);

  if (one >= 3) {
    score += 1000;
    one -= 3;
  }
  if (six >= 3) {
    score += 600;
  }
  if (five >= 3) {
    score += 500;
    five -= 3;
  }
  if (four >= 3) {
    score += 400;
  }
  if (three >= 3) {
    score += 300;
  }
  if (two >= 3) {
    score += 200;
  }
  console.log(one);
  score += one * 100;
  score += five * 50;
  return score;
}

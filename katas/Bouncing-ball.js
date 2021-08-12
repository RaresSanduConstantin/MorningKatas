/* 
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript

*/

function bouncingBall(h, bounce, window) {
  // your code here
  if (bounce === 1) return -1;
  if (bounce <= 0) return -1;
  if (window >= h) return -1;
  if (h <= 0) return -1;

  let ballBounce = 0;
  let newH = h;
  while (newH > window) {
    ballBounce = ballBounce + 2;
    newH = newH * bounce;
  }
  return ballBounce - 1;
}

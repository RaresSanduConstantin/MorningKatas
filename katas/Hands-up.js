/* 
Kata 04.05.2021

Imagine that you have an array of 3 integers each representing a different person. Each number can be 0, 1, or 2 which represents the number of hands that person holds up.

Now imagine there is a sequence which follows these rules:

None of the people have their arms raised at first
Firstly, a person raises 1 hand; then they raise the second hand; after that they put both hands down - these steps form a cycle
Person #1 performs these steps all the time, person #2 advances only after person #1 puts their hands down, and person #3 advances only after person #2 puts their hands down
The first 10 steps of the sequence represented as a table are:

Step   P1   P2   P3
--------------------
 0     0    0    0
 1     1    0    0
 2     2    0    0
 3     0    1    0
 4     1    1    0
 5     2    1    0
 6     0    2    0
 7     1    2    0
 8     2    2    0
 9     0    0    1

 https://www.codewars.com/kata/56d8f14cba01a83cdb0002a2
*/

const getPositions = (s) => {
  let array = [0, 0, 0];

  array[0] = s % 3;
  array[1] = Math.floor(s / 3) % 3;
  array[2] = Math.floor(s / 9) % 3;

  return array;
};

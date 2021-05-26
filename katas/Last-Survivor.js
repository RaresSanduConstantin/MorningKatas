/* 
kata 24.05.2021
https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript/ */

function lastSurvivor(letters, coords) {
  let arr = letters.split('');
  coords.forEach((cor) => {
    return arr.splice(cor, 1);
  });
  return arr.join('');
}

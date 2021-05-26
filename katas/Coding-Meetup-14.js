/* 
kata 12.05.2021
Coding Meetup #14 - Higher-Order Functions Series - Order the food

https://www.codewars.com/kata/583952fbc23341c7180002fd
*/

function orderFood(list) {
    // thank you for checking out the Coding Meetup kata :)
    let resp = {
      vegetarian: 0,
      standard: 0,
      vegan: 0
    };
   
    list.forEach(dev => {
      if (!resp[dev.meal]) {
        resp[dev.meal] = 0;
      }
        resp[dev.meal]++;
    });
   
  //   { vegetarian: 2, standard: 1, vegan: 1 }
  return resp;
  }
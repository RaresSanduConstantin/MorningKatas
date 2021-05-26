/* Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse? 

https://www.codewars.com/kata/58381907f8ac48ae070000de
*/
function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
  // thank you for checking out the Coding Meetup kata :)
  let resp = {
    Python: 1,
    Ruby: 2,
    JavaScript: 4, //x2
  };

  list.forEach((dev) => {
    if (!resp[dev.language]) {
      resp[dev.language] = 0;
    }
    resp[dev.language]++;
  });

  for (const [key, value] of Object.entries(resp)) {
  }
  console.log(resp);
  // return resp;
}

/* kata 13.05.2021 */

function isLanguageDiverse(list) {
    // thank you for checking out the Coding Meetup kata :)
    let resp = {
      Python: 0,
      Ruby: 0,
      JavaScript: 0 //x2
    };
   
  
    list.forEach(dev => {
      if (!resp[dev.language]) {
        resp[dev.language] = 0;
      }
        resp[dev.language]++;
    });
   
    let arr = [];
  
    arr = Object.keys(resp).map(key => resp[key])
   
    return Math.min(...arr) *2 >= Math.max(...arr);
     
  }

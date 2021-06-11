/* 
Returns the commom directory path for specified array of full filenames.

 @param {array} pathes
 @return {string}
Examples:

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'

  https://www.codewars.com/kata/597f334f1fe82a950500004b/train/javascript

*/

function getCommonDirectoryPath(pathes) {
  let res = '';
  let initialarr = pathes.map((el) => el.split('/'));

  for (let i = 0; i < initialarr[0].length; i++) {
    for (let j = 0; j < initialarr.length; j++) {
      if (initialarr[j][i] !== initialarr[0][i]) {
        if (i === 0) {
          return '';
        } else return initialarr[0].slice(0, i).join('/') + '/';
      }
    }
  }
  return res;
}


/* 
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters

describe('tests', () => {
  it('fixed tests', () => {
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
  
  it('random tests', () => {
    function fixture (str) {
    	return str.replace(/\d/g,'')
        .split(/(?=[A-Z])/).map(s => s.toLowerCase()).join('-')
    }
    
    for (let i = 0; i <= 100; i += 1) {
      let token = Test.randomToken();
      
      let camel = token.split('').map(c => {
    	  const rand = Math.random();
    	  return rand > 0.9 ? c.toUpperCase() : c
      }).join('')
        
      Test.assertEquals(kebabize(camel), fixture(camel));
    }
  });
});


*/

const kebabize = str => str.replace(/([0-9])/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()
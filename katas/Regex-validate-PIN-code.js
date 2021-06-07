/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
*/

function validatePIN(pin) {
  //return true or false
  let reg = /^[0-9]+$/;
  if (pin.length === 4 || pin.length === 6) {
    return reg.test(pin);
  } else {
    return false;
  }

  console.log('cl', reg.test(pin));
}

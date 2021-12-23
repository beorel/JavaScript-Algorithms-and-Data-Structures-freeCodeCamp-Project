/*Question:
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function palindrome(str) {
    /* 1. convert str to lowercase
    2. remove all the non aplhabet & numbers 
    3. let str === reversestring
    */
    let lowercase = str.toLowerCase()
    let nonAlphaNum = lowercase.match(/[a-z0-9]/g);
    let joinString = nonAlphaNum.join('');
    let reverseString = nonAlphaNum.reverse().join('');
  
    if (joinString === reverseString) {
      return true;
    } else {
      return false;
    }
  
}

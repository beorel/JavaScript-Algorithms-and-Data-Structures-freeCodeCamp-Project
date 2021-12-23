/*Caesar Cipher Wheel: https://www.xarg.org/tools/caesar-cipher/
Question:
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    //1. create a list of alphabet
    //2. create an variable with empty string to take in the output
    //3. traverse through through the str
    //i. if [i] is not a letter, maybe space/exclamation marks, 
    // add it to the variable
    //ii. else if its a character, it should rotate through through the alphabet +/- 13, 
    // add to the variable
    //4. return the variable

    //1.
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //2. 
    let result = "";

    //3
    for (let i = 0; i < str.length; i++) {
        // character = str[i]
        const aLetter = alphabet.includes(str[i]); // or const aLetter = alphabet.includes(character)
        //i
        if (aLetter === false) {
            result += str[i]; // or result += character
        }
        //ii
        else {
            const iIndex = alphabet.findIndex((char) => char === str[i]); //or const iIndex =alphabet.findIndex((char) => char === character)
            result += alphabet[iIndex + 13] || alphabet[iIndex - 13];
        }
    }
    return result;
}
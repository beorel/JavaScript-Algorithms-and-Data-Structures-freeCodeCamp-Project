/* Question:
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
    /*1. create roman table
    2. create an empty string (roman symbol) that will take in symbols
    3. traverse through the table
    4. if currentNumber <= num, then substract current number from num.
    5. add the symbol substracted to the roman symbol string
    6. return roman symbol
    */
    let romanTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanSymbol = '';

    //how to traverse through an object is
    //for (const key in romanTable)
    for (const key in romanTable) {
        let romanValue = romanTable[key]

        while (romanValue <= num) {
            num -= romanValue;
            romanSymbol += key
        }
    }
    return romanSymbol;
}

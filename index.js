const testStrings = ["+d+=a", "+a+==+s+", "=+s+=+d+", "==+=++s++4+3+"];

// helper utils
const isChar = char => char !== '+' && char !== "=";
const isSymbol = char => char === '+';

function stringIsValid(string) {

    let charArray = string.split("");
    let valid;

    for (let i = 0; i < charArray.length; i++) {
        // helper vars
        let firstItem = charArray[0];
        let lastItem = charArray[charArray.length - 1];
        let previous = charArray[i - 1];
        let next = charArray[i + 1];
        let current = charArray[i];

        if (isChar(firstItem) || isChar(lastItem)) {
            valid = false;
            break;
        }

        if (isChar(current)) {
            if (isSymbol(previous) && isSymbol(next)) {
                valid = true;
                continue;    
            } else {
                valid = false;
                break;
            }
        }
    }

    return valid
}

testStrings.map(testString => console.log(stringIsValid(testString)))

module.exports = {
    stringIsValid  
}
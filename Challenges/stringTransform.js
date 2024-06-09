// Coding Challenge 2: String Transformation
/*Problem Statement: 
Given a string, transform it based on the following rules:
● If the length of the string is divisible by 3, reverse the entire string.
● If the length of the string is divisible by 5, replace each character with its ASCII code.
● If the length of the string is divisible by both 3 and 5(i.e., divisible by 15), perform
both operations in the order specified above.
*/

function stringTransform(str) {
    const length = str.length;
    console.log(length);
    let result = str;

    if (length % 15 === 0) {
        result = result.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        result = result.split('').reverse().join('');
    }

    return result;
}

// testing
console.log(stringTransform("Hamburger"));  
console.log(stringTransform("Pizza"));
console.log(stringTransform("Chocolate Chip Cookie"));
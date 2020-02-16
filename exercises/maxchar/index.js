// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    let obj = {};
    // [...str].forEach((character, i) => {
    //     obj = {
    //         ...obj,
    //         str[i]: character
    //     }
    // })

    for (let char of str) {
        // obj[char] = obj[char] + 1 || 1
        // ^ a fancier way of writing the below statements; could also use a ternary operator
        
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
        // This is creating an object out of the string and recording the number of instances any character appears. It's saying "If there's a value at the key of char, increment by 1; otherwise, create that key and set its value to 1"
    }
    // this COULD be solved like this:
    // let max = 0;
    // let maxChar = '';

    // for (let char in obj) { // char is assigned to the KEYS of the object
    //     if (obj[char] > max) {
    //         max = obj[char]
    //         maxChar = char
    //     }
    // }
    // return maxChar

    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b)
    // This turns the object into an array of keys, which we then iterate through with reduce. Reduce takes two keys and compares the value of object[keyA] against object[keyB], eventually returning the single highest value due to the ternary statement. This MAY not work if there are multiple highest values? Would need to probably use a diff array method or implement some control flow in the reduce for when obj[a] and obj[b] are equal.
}

module.exports = maxChar;

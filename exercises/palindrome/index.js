// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    // comparing reversed string
        // const rev = [...str].reverse().join('')
        // return str === rev 

    // comparing halves
        // const halfA = str.slice(0, Math.floor((str.length/2)))
        // const halfB = str.slice(Math.ceil((str.length/2)), str.length)

        // return halfA === [...halfB].reverse().join('')

    // using .every()
        return str.split('').every((char, i) => {
            return char === str[str.length-1-i]
        })
}

module.exports = palindrome;

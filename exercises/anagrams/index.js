// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Wait, it could be EVEN SIMPLER! TAKE THREE:
function anagrams(stringA, stringB) {
    // clean the strings of any punctuation, make them lowercase, then sort and join the array into a string
    const cleanStringA = stringA.toLowerCase().match(/\w/gi).sort().join()
    const cleanStringB = stringB.toLowerCase().match(/\w/gi).sort().join()

    // D'OH! I can just use strict equality since I've already sanitized my data and turned it into a string.
    
    return cleanStringA === cleanStringB
  }
  

module.exports = anagrams;


// THE FIRST SOLUTION I CAME UP WITH:

// function makeArr (string) {
// a helper function that extracts the "make an object containing characters and counts" logic away from my anagrams function
//     const obj = {}
//     for (let char of string) {
//           if (obj[char]) {
//             obj[char]++
//           } else {
//             obj[char.toLowerCase()] = 1
//           }
//       }
//     return Object.entries(obj).sort()
   
//   }

// function anagrams(stringA, stringB) {
//     // clean the strings of any punctuation
//     const cleanStringA = stringA.match(/\w/gi).join('').toLowerCase()
//     const cleanStringB = stringB.match(/\w/gi).join('').toLowerCase()
//     // if the cleaned strings are different lengths, they're not anagrams, no further checking needed
//     if (cleanStringA.length !== cleanStringB.length) {
//       return false
//     }
//     // use a function to make a sorted array of letters
//     const arrA = makeArr(cleanStringA)
//     const arrB = makeArr(cleanStringB)
//     // default state is true because one false letter means they aren't anagrams, while one true letter doesn't necessarily mean they ARE anagrams. We're checking for false letters to see if we should flip the boolean to false.
//     let isAnagram = true
//     if (arrA.length !== arrB.length) {
//         // checking for length of combined array -- if unequal, they are not anagrams
//         isAnagram = false
//       } else {
//         arrA.forEach((item, i) => {
//         // console.log(item[1])
//           if ((item[1] !== arrB[i][1])) {
//             anagram = false
//           }
//         })
//       }
//     return isAnagram
//   }




// realized I didn't need to make an object at all and could just use strings and arrays! TAKE TWO:
// function anagrams(stringA, stringB) {
//     // clean the strings of any punctuation, make them lowercase, then sort and join the array into a string
//     const cleanStringA = stringA.toLowerCase().match(/\w/gi).sort().join()
//     const cleanStringB = stringB.toLowerCase().match(/\w/gi).sort().join()

//     // default state is true because one false letter means they aren't anagrams, while one true letter doesn't necessarily mean they ARE anagrams. We're checking for false letters to see if we should flip the boolean to false.
//     let isAnagram = true
//     if (cleanStringA.length !== cleanStringB.length) {
//         // if the cleaned strings are different lengths, they're not anagrams, no further checking needed
//         isAnagram = false
//       } else {
//           // since we sorted the string and we know the strings are the same length, we can check for equality character by character. if any don't match, it's not an anagram
//         for (let i = 0; i < cleanStringA.length; i++) {
//             if (cleanStringA[i] !== cleanStringB[i])
//             isAnagram = false
//           }
//       }
//     return isAnagram
//   }
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function makeArr (string) {

    const obj = {}
    for (let char of string) {
          if (obj[char]) {
            obj[char]++
          } else {
            obj[char.toLowerCase()] = 1
          }
      }
    return Object.entries(obj).sort()
   
  }
  
  function anagrams(stringA, stringB) {
    // clean the strings of any punctuation
    const cleanStringA = stringA.match(/\w/gi).join('').toLowerCase()
    const cleanStringB = stringB.match(/\w/gi).join('').toLowerCase()
    // if the cleaned strings are different lengths, they're not anagrams, no further checking needed
    if (cleanStringA.length !== cleanStringB.length) {
      return false
    }
    // use a function to make a sorted array of letters
    const arrA = makeArr(cleanStringA)
    const arrB = makeArr(cleanStringB)
    // default state is true because one false letter means they aren't anagrams, while one true letter doesn't necessarily mean they ARE anagrams. We're checking for false letters to see if we should flip the boolean to false.
    let isAnagram = true
    if (arrA.length !== arrB.length) {
        // checking for length of combined array -- if unequal, they are not anagrams
        isAnagram = false
      } else {
        arrA.forEach((item, i) => {
        // console.log(item[1])
          if ((item[1] !== arrB[i][1])) {
            anagram = false
          }
        })
      }
    return isAnagram
  }

module.exports = anagrams;

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // if (n < Math.abs(n)) {
    //     let rev = parseInt(n.toString().split('').reverse().join(''))
    //     return 0 - rev
    // } else {
    //     return parseInt(n.toString().split('').reverse().join(''))
    // }

    // using Math.sign()
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;

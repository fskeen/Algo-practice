// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    // using native array methods
    // let reversed = [...str].reverse().join('')

    // using newer for...of loop syntax 
    // let loopReversed = ''
    // for (let character of str) {
    //     loopReversed = character + loopReversed; // adds the current character onto the START of the reversed string
    // }

    // using classic for loop to iterate using string attributes
    let old = []
    for (let i = str.length-1; i >= 0; i--) {
        old.push(str[i])
    }
    return old.join('')

}
reverse('asdf')
module.exports = reverse;

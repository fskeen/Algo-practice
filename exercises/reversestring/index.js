// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // using native array methods
    let reversed = [...str].reverse().join('')

    // using a loop
    let old = []
    for (let i = str.length; i >= 0; i--) {
        old.push(str[i])
    }
    return old.join('')
}

module.exports = reverse;

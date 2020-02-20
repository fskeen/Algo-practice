// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// WOOHOO, SECOND TRY! Three cheers for string interpolation, no cheers for Array(n).
function steps(n) {
    for (let i = 1; i <= n; i++) {
      let hashtags = i;
      let spaces = n - i;
      console.log(`${''.padStart(hashtags, "#")}${''.padStart(spaces, ' ')}`)
      }
    }

module.exports = steps;

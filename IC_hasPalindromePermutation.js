////////////////////////////////////////////////
////////////// First Attempt ///////////////////
////////////////////////////////////////////////

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  let quanByLetter = {};

  for (let i = 0; i < theString.length; i++) {
    if (quanByLetter.hasOwnProperty(theString[i])) {
      quanByLetter[theString[i]] += 1;
    }
    else {
      quanByLetter[theString[i]] = 1;
    }
  }

  let quans = [];
  for (let i in quanByLetter) {
    quans.push(quanByLetter[i]);
  }

  const parity = quans.map(i => i % 2 === 0);
  const odd = parity.filter(i => i === false);

  return odd.length > 1 ? false : true;
}

////////////////////////////////////////////////
////////////// Second Attempt //////////////////
////////////////////////////////////////////////

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome

  let arr = theString.split('');
  let letters = new Set(arr);
  let quans = Array.from(letters).map(i => arr.filter(j => i === j).length);
  let odds = quans.filter(i => i % 2 !== 0);

  return odds.length > 1 ? false : true;
}

////////////////////////////////////////////////
/////////////// Third Attempt //////////////////
////////////////////////////////////////////////

function hasPalindromePermutation(theString) {
  let odds = new Set();

  for (let char of theString) {
    if (odds.has(char)) {
      odds.delete(char);
    }
    else {
      odds.add(char);
    }
  }

  return odds.size > 1 ? false : true;
}
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

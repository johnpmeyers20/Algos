//https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;
  let regexArr = [/[!@#$%^&*()\-+]/g, /[A-Z]/g, /[a-z]/g, /\d/g];
  for (let i of regexArr) {
      !(password.match(i)) && count++;
  }
  const passLen = password.length;
  if (count === 0 && passLen >= 6) return 0;
  if (passLen >= 6 && count !== 0) return count;
  if (passLen < 6) {
      let missing = 6 - passLen;
      return missing > count ? missing : count;
  }
}
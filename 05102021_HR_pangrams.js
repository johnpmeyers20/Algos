https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
  // Write your code here
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const lettersOfS = s.toLowerCase().split(' ').join('');
  const uniques = [...new Set(lettersOfS)].sort().join('');
  console.log(uniques)
  return letters.length === uniques.length ? 'pangram' : 'not pangram';
}
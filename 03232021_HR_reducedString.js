//https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  const pairFinder = (s) => {
      const regex = /([a-z])\1/g //this regex catches pairs of characters from the a-z range ex. 'aa', 'dd'
      const pair = s.match(regex) //created this variable to keep code dry
      return pair ? pair[0] : null; //if there's a pair, return the first pair from the array, otherwise return null
  }
  
  while (pairFinder(s)) {
    s = s.replace(pairFinder(s), '') //set s = to the string without the current pair. in other words, remove current pair from string
  }
  
  return s.length > 0 ? s : 'Empty String'; // If anything remains return the string otherwise, return 'Empty String'
}
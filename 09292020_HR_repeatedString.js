////////////////////////////////////////
//////////////// Problem ///////////////
////////////////////////////////////////

//Lilah has a string, s, of lowercase English letters 
//that she repeated infinitely many times.

//Given an integer, n, find and print the number of 
//letter a's in the first  letters of Lilah's infinite string.

//For example, if the string s = 'abcac' and n = 10 
//the substring we consider is abcacabcac the first  
//characters 10 of her infinite string.There are 4 
//occurrences of a in the substring.

////////////////////////////////////////
/////////////// Solution ///////////////
////////////////////////////////////////

function repeatedStrings(s, n) {
  let count = (s.match(/a/g) || []).length * Math.floor(n/s.length)
  let remainder = n % s.length
  let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

  return count + remainderCount
}

TAKEAWAY

//Measure the length of truthy value determined by parens
//substring

////////////////////////////////////////
//////////// First Attempt /////////////
////////////////////////////////////////

function repeatedStrings1(s, n) {
  const aCount = str => str.match(/(a)/g).length;
  if (n % s.length === 0) {
    return aCount(s) * (n / s.length);
  }
  else {
    let wholeLen = Math.floor(n / s.length);
    let aWhole = aCount(s);
    let rem = (n / s.length) / n;
    let slicer = s.length * rem;
    let piece = aCount(s.split('').slice(0, slicer).join(''));
    let ans = wholeLen * aWhole + piece;
    console.log(ans);
    return ans;
  }
}
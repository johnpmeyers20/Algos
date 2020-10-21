//Given a string, return its encoding defined as follows:

//First, the string is divided into the least possible 
//number of disjoint substrings consisting of identical 
//characters

//for example, "aabbbc" is divided into ["aa", "bbb", "c"]

//Next, each substring with length greater than one is 
//replaced with a concatenation of its length and the 
//repeating character

//for example, substring "bbb" is replaced by "3b"

//Finally, all the new strings are concatenated together 
//in the same order and a new string is returned.

//////////////////////////////////////////////////////////////////
//////////////////////// best solution ///////////////////////////
//////////////////////////////////////////////////////////////////

function lineEncoding(s) {
    return s.match(/([a-z])\1*/g)
    .map(i => { return i.length > 1 ? i.length + i[0] : i })
    .join('');
}

//Takeaway
//regex to the rescue. If you want to break a string up by 
//groups of the same letter you use /(.)\1*/g 

//////////////////////////////////////////////////////////////////
//////////////////////// first attempt ///////////////////////////
//////////////////////////////////////////////////////////////////

function lineEncoding(s) {
  let w = s.match(/([a-z])\1*/g);
  console.log(w);
  let ans = w.map(i => {
      if (i.length > 1) {
          return i.length + i[0];
      }
      else {
          return i;
      }
  }).join('');
  console.log('ans', ans);
  return ans;
}
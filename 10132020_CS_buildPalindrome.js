//Given a string, find the shortest possible string 
//which can be achieved by adding characters to the 
//end of initial string to make it a palindrome.


////////////////////////////////////////////////////
///////////////////first attempt ///////////////////
////////////////////////////////////////////////////

function buildPalindrome(st) {
  let isPal = (s) => {
      let flip = s.split('').reverse().join('');
      // console.log(flip);
      return flip == s ? true : false;
  }
  
  if (isPal(st)) {
      return st;
  }
  else {
      let longestPal = st.length;
      for (let i = st.length - 1; i > 0; i--) {
          let piece = st.slice(i);
          if (isPal(piece) === true) longestPal = i;
      }
      let remainder = st.slice(0,longestPal).split('').reverse().join('');
      // console.log('longestPal', longestPal);
      // console.log(remainder);
      // console.log(st.concat(remainder));
      return st.concat(remainder);
  }
}

//This solution worked but did not achieve optimum efficiency
//because it checked multiple palindromes moving backward
//In my second attempt I moved from the front and returned
//at the first instance of a palindrome which was much more
//efficient.

////////////////////////////////////////////////////
///////////////// second attempt ///////////////////
////////////////////////////////////////////////////

function buildPalindrome(st) {
  let isPal = (s) => {
      return s == s.split('').reverse().join('');
  }
  
  if (isPal(st)) return st;
 
  for (let i = 0; i < st.length; i++) {
      if (isPal(st.slice(i)) === true) {
          return st.concat(st.slice(0,i).split('').reverse().join(''))
      }
  }
}

//I actually didn't understand why this worked for strings like
//'abc' initially. It works because the last letter of a word
//bereft of palindromes is in and of itself a palindrome.
//for example 'abc' c is a palindrome so it return 'abcba'
//happy accident indeed.
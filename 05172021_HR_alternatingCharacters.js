https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
  // // Write your code here
  let arr = s.split('');
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] === arr[i]) {
          counter++;
      }
  }
  return counter;
}

//First I went through and spliced out elements from the array
//It failed and I realized my process was too expensive
//So I just counted once if two consecutive chars were the same value
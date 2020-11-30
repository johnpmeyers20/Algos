//Watson likes to challenge Sherlock's math ability. 
//He will provide a starting and ending value describing 
//a range of integers.Sherlock must determine the 
//number of square integers within that range, inclusive 
//of the endpoints.

//Note: A square integer is an integer which is the square 
//of an integer, e.g. 1, 4, 9, 16, 25 etc

//For example, the range is a=24  and b = 49, inclusive. 
//There are three square integers in the range: 25, 36, and 49.

function squares(a, b) {
  const firstIncluded = Math.floor(Math.sqrt(a)) === Math.sqrt(a);
  // console.log('firstIncluded', firstIncluded);
  const beg = Math.floor(Math.sqrt(a));
  // console.log('beg', beg);
  let end = Math.floor(Math.sqrt(b));
  // console.log('end', end);
  // console.log(end - beg);
  let res = end - beg;
  if (firstIncluded) res++;
  return res;
  
}

//When I first attempted this algorithm, I looped through all
//the integers in a given range, but my algo was timing out.

//I then tried to limit the amount of work being done and
//figured that I could tell how many sqrts were in the range and
//just subtract one from the other.

//This didn't work at first because if the bottom number was
//included it raised the number 

//eg between 3 and 9 are 2 square roots, but I was checking
//using the Math.floor method which would then make my a and b
//1 and 3 (for 3 to 9). But in the range (1 to 9) the same numbers 
//would be included 1 and 3. 

//To solve this dilemma, 1 needs to be added to the final
//number if the "beg" value is a sqrt itself.
//Implement the missing code, denoted by ellipses. 
//You may not modify the pre - existing code.

//In order to stop the Mad Coder evil genius you need 
//to decipher the encrypted message he sent to his 
//minions.The message contains several numbers that, when 
//typed into a supercomputer, will launch a missile into 
//the sky blocking out the sun, and making all the people 
//on Earth grumpy and sad.

//You figured out that some numbers have a modified single 
//digit in their binary representation.More specifically, 
//in the given number n the kth bit from the right was 
//initially set to 0, but its current value might be 
//different.It's now up to you to write a function that 
//will change the kth bit of n back to 0.

BEST SOLUTION

function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}

//First Attempt//
function killKthBit(n, k) {
  return parseInt(n.toString(2).split('').map((el,i) => {
      if (i === n.toString(2).length - k) {
          return el = '0';
      }
      else {
          return el = el;
      }
  })
  .join(''),2);
}


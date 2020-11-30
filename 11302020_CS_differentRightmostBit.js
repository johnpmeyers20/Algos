//You're given two integers, n and m. Find position of the 
//rightmost bit in which they differ in their binary 
//representations(it is guaranteed that such a bit exists), 
//counting from right to left.

//Return the value of 2position_of_the_found_bit (0-based).

function differentRightmostBit(n, m) {
  return 2 ** Number(n^m).toString(2).split('').reverse().indexOf('1');
}

//I started this one off not using bitwise operators but
//it was very lengthy and wasn't getting results. Finally
//I'm beginning to grasp bitwise operators. Today I used (^) or 
// what is known as the XOR operator. It only gives a one, 
//if there was a difference between values

//eg 11 ^ 13 === 6. 
//11 === 01011
//13 === O1101
//11 ^ 13 === 110; 
// the last zero here is needed as a placeholder. digits 1 and 
//2 from the right differed between the 2 numbers, thus they
//remain when using the XOR operator. This binary value in 
//decimal is 6!
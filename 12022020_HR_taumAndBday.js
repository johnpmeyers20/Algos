//https://www.hackerrank.com/challenges/taum-and-bday/problem

function taumBday(b, w, bc, wc, z) {
  return BigInt(b * Math.min(bc,wc+z))+(w * Math.min(wc, bc+z));
}

//Takeaway
//This one took me some time just because of the arithmetic. 
//Once I had that figured out I was failing 2 test cases
//because the numbers were very large. 
//Everything passed once I added BigInt() before all the numbers
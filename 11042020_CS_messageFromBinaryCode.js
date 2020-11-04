//You are taking part in an Escape Room challenge 
//designed specifically for programmers.In your 
//efforts to find a clue, you've found a binary 
//code written on the wall behind a vase, and realized 
//that it must be an encrypted message.After some thought, 
//your first guess is that each consecutive 8 bits of 
//the code stand for the character with the 
//corresponding extended ASCII code.

//Assuming that your hunch is correct, decode the message.

function messageFromBinaryCode(code) {
  return code.match(/(\d{8})/g)
      .map(i => String.fromCharCode(parseInt(i,2)))
      .join('');
}

//This was my first time learning about radix, binary numbers
//can only be 1 or 0. 2 options => radix 2
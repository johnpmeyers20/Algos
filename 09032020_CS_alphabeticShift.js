//Given a string, your task is to replace each of
//its characters by the next one in the English
//alphabet; i.e.replace a with b, replace b with c,
//etc(z would be replaced by a).

function alphabeticShift(str) {
  const alph = "abcdefghijklmnopqrstuvwxyza";
  return str
    .split("")
    .map((i) => alph[alph.indexOf(i) + 1])
    .join("");
}

//Because I need to know the index of a given letter, I create
//a constant variable containing the alphabet as a string

//Even if I need an arr this is fastest b/c I could split it

//I split the input string in order to map through it
//In the new array, I put the value of from 1 index past the
//given letter.

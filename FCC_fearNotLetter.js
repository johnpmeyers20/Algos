////////////////////////////////////////
////////// first attempt ///////////////
////////////////////////////////////////

function fearNotLetter(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  //slice from str first letter to last letter
  //compare strings
    //let only those not represented remain

  let first = alph.indexOf(str[0]);
  let last = alph.indexOf(str[str.length-1]);
  let alphSlice = alph.slice(first, last + 1);
  let missing = alphSlice
    .split('')
    .filter(i => !str.slice('').includes(i))
    .join('');
  console.log(missing);
  let ans = missing;
  return ans ? ans : undefined;
}

fearNotLetter("abce");


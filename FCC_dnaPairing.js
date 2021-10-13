////////////////////////////////////////
////////// first attempt ///////////////
////////////////////////////////////////

function pairElement(str) {
  const pairFind = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
  let pairs = [];

  for (let i = 0; i < str.length; i++) {
    let curr = [];
    curr.push(str[i]);
    curr.push(pairFind[str[i]]);
    pairs.push(curr);
  }
  return pairs;
}

////////////////////////////////////////
//////// more elegant solution /////////
////////////////////////////////////////

function pairElement(str) {
  const pairFind = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
  let arr = str.split('');
  return arr.map(i => [i, pairFind[i]]);
}
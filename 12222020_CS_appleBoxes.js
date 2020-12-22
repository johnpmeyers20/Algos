//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf

function appleBoxes(k) {
  return [...Array(k).keys()]
    .map(i => i += 1)
    .map(i => i & 1 ? -(i**2) : i**2)
    .reduce((a,c) => a+c);
}

//////////////////////////////////////////////////////
////////////////// second attempt ////////////////////
//////////////////////////////////////////////////////

function appleBoxes(k) {
  let count = 0;
  for (let i = 1; i <= k; i++) {
     i & 1 ? count -= i**2 : count += i**2
  }
  return count;
}

//////////////////////////////////////////////////////
/////////////////// first attempt ////////////////////
//////////////////////////////////////////////////////

function appleBoxes(k) {
  let yellow = 0, red = 0;
  for (let i = 1; i <= k; i++) {
      if (i%2 === 0) {
         red += i**2; 
      }
      else {
          yellow += i**2
      }
  }
  return red - yellow;
}
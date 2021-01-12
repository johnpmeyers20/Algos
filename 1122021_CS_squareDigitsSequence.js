//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/MvX84CA5HN6GKqv7R

function squareDigitsSequence(a0) {
  let curr = a0;
  let ans = [];
  
  const splitter = num => {
      return num.toString().split('').map(i => parseInt(i)**2).reduce((a,c) => a + c);
  }
  
  while (!ans.includes(curr)) {
      ans.push(curr);
      curr = splitter(curr);
  } 
  
  return ans.length + 1;
}

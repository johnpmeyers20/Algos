//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5

function comfortableNumbers(l, r) {
  const range = (num1, num2) => Array(num2 - num1 + 1).fill().map((_,idx) => num1 + idx);
  const sumOfDigits = (num) => num.toString().split('').map(i=>parseInt(i)).reduce((a,c)=>a+c);
  const currIncR = (num, largestNum) => range(num, num + sumOfDigits(num))
      .filter(j => j >= num && j <= largestNum);
  const currDecR = (num, smallestNum) => range(num - sumOfDigits(num), num)
      .filter(j => j >= smallestNum && j < num);
  let numOfMatches = 0;
  for (let i = l; i <= r; i++) {
      let currR = currIncR(i, r);
      let matches = currR.map(val => currDecR(val,i).includes(i))
          .filter(v => v === true).length;
      numOfMatches += matches;
  }
  return numOfMatches;
}
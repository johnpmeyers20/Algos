//Let's define digit degree of some positive integer
//as the number of times we need to replace this number
//with the sum of its digits until we get to a one digit
//number.

//Given an integer, find its digit degree.

//ex. n=92: 9 + 2 = 11 -> 1 + 1 = 2
//digitDegree(92) === 2

function digitDegree(n) {
  //determine the length of a digit
  const numLen = (num) => {
    return num.toString().length;
  };
  //get value of all of a numbers digits added together
  const prod = (num) => {
    return num
      .toString()
      .split("")
      .map((i) => parseInt(i))
      .reduce((a, c) => a + c);
  };
  //count rounds necessar to get to a single digit
  let c = 0;
  while (numLen(n) > 1) {
    n = prod(n);
    c++;
  }
  return c;
}

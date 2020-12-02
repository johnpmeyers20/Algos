//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

function leastFactorial(n) {
  const factorial = (num) => {
      let total = 1;
      while (num > 1) {
          total *= num;
          num--;
      }
      return total;
  }
  
  let start = 1;
  while (factorial(start) < n) {
      start++;
  }
  return factorial(start);
}

//This one was pretty straightforward, though I was scared of the factorial right off the bat
//I ended up messing around in node to figure that out.
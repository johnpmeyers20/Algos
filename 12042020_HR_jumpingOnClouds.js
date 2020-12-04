//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
  let numJumps = 0;
  let curr = 0;
  let lastThunder = c.lastIndexOf(1);
  
  while (curr < lastThunder) {
      let distToThunder = c.indexOf(1, curr) - curr;
      console.log('1. numJumps: ', numJumps);
      console.log('2. curr', curr);
      console.log('3. distToThunder', distToThunder);
      console.log('-------------------------------------------')
      if (distToThunder === 2) {
          numJumps++;
          curr++;
      }
      else if (distToThunder === 1 || distToThunder > 2) {
          numJumps++;
          curr += 2;
      }
  }
  
  while (curr < c.length - 1) {
      let distToEnd = c.length - curr;
      if (curr > lastThunder) {
          console.log('1. numJumps: ', numJumps);
          console.log('2. curr', curr);
          console.log('3. distToEnd', distToEnd);
          console.log('-------------------------------------------')
          if (distToEnd > 1) {
              numJumps++;
              curr += 2;
          }
          else {
              numJumps++;
              curr++;
          }
      }
  }
  console.log('final jumps', numJumps);
  console.log('final curr', curr);
  return numJumps;
}
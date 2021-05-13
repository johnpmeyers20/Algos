https://www.hackerrank.com/challenges/countingsort2/problem

function countingSort(arr) {
  // Write your code here
  const pigeon = Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) {
      pigeon[arr[i]]++;
  }
  // console.log(pigeon);
  const res = [];
  for (let i = 0; i < pigeon.length; i++) {
      if (pigeon[i] === 0) {
          continue;
      }
      else {
          for (let j = 0; j < pigeon[i]; j++) {
              res.push(i);
          }
      }
  }
  console.log(res);
  return res;
}
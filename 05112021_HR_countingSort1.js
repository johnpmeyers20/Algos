https://www.hackerrank.com/challenges/countingsort1/problem

function countingSort(arr) {
  // Create an Array of arbitrary length filled with 0's
  let res = Array(100).fill(0);
  //iterate through arr of given values
  for (let i = 0; i < arr.length; i++) {
    //add one to the given index's existing value
      res[arr[i]]++;
  }
  console.log(res);
  return res;
}
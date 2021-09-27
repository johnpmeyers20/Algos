//Reduced version of first attempt

function diffArray(arr1, arr2) {
  var newArr = [];

  const setter = (arr) => Array.from(new Set(arr));
  let filteredArr1 = setter(arr1);
  let filteredArr2 = setter(arr2);

  const sorter = (arr1, arr2) =>
    [arr1, arr2].sort((a, b) => b.length - a.length);

  let bigInFront = sorter(filteredArr1, filteredArr2);

  function checkDiff(arr, idx1, idx2) {
    for (let i = 0; i < arr[idx1].length; i++) {
      if (!arr[idx2].includes(bigInFront[idx1][i])) {
        newArr.push(bigInFront[idx1][i]);
      }
    }
  }

  checkDiff(bigInFront, 0, 1);
  checkDiff(bigInFront, 1, 0);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Better answer
// Combine arrays and filter for elements that aren't in either

function diffArray(arr1, arr2) {
  // var newArr = [];
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
function extractEachKth(arr, k) {
  let newArr = [];
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    if (counter % k !== 0) {
      newArr.push(arr[i]);
    }
    counter++;
  }
  console.log(newArr);
  return newArr;
}

//This solution worked, but it can also be summed up in a 1 liner as such:

function extractEachKth(arr, k) {
  return arr.filter((_, i) => (i + 1) % k);
}

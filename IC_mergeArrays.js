function mergeArrays(myArray, alicesArray) {
  let merged = [];

  let myIdx = 0;
  let alicesIdx = 0;
  let mergedIdx = 0;

  while (mergedIdx < (myArray.length + alicesArray.length)) {
    const myVal = myArray[myIdx];
    const alicesVal = alicesArray[alicesIdx];

    if (myIdx >= myArray.length || alicesVal < myVal) {
      merged[mergedIdx] = alicesVal;
      alicesIdx++;
    }
    else {
      merged[mergedIdx] = myVal;
      myIdx++;
    }
    mergedIdx++;
  }
  return merged;
}

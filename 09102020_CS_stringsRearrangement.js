function stringsRearrangement(arr) {
  //Check to see if there's a 1 letter difference between strings
  function diffCheck(str1, str2) {
    let diffs = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diffs++;
      if (diffs > 1) break;
    }
    if (diffs === 1) console.log("diffy");
    return diffs === 1;
  }

  //If there's a one letter difference between 2 strings, recursively call the
  //function removing the given element every time.
  //If the next function is called recursively until the arr is empty,
  //it indicates that all the words can be set with a one letter difference

  function next(curr, arr) {
    console.log("NEXT");
    if (arr.length === 0) {
      console.log("arr length = 0");
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      if (diffCheck(curr, arr[i])) {
        console.log("next i: ", i);
        console.log("diffCheck curr: ", curr, ", arr[i]: ", arr[i]);
        console.log(
          `next(arr[${i}], arr.slice(0,${i}).concat(arr.slice(${i + 1}))): `
        );
        let remaining = next(arr[i], arr.slice(0, i).concat(arr.slice(i + 1)));
        console.log("next remaining", remaining);
        if (remaining.length === 0) return remaining;
      }
    }
    console.log("next return arr: ", arr);
    return arr;
  }

  //start with the first element and run until the end of the array
  function mother(arr) {
    console.log("MOTHER");
    for (let i = 0; i < arr.length; i++) {
      console.log("Mother i: ", i, "=> ", arr[i], ",", arr);
      let remaining = next(arr[i], arr);
      console.log("Mother remaining: ", remaining);
      if (remaining.length === 0) {
        console.log("Mother remaining length = 0 SO TRUE");
        return true;
      }
    }
    return false;
  }

  return mother(arr);
}

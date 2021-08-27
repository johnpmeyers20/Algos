//This was my first attempt. It passed the test cases.

function reverse(arrayOfChars) {
  console.log(arrayOfChars);
  // Reverse the input array of characters in place
  for (let i = 0; i < arrayOfChars.length; i++) {
    if (arrayOfChars[i + 1]) {
      const currLetter = arrayOfChars.splice(i + 1, 1);
      arrayOfChars.splice(0, 0, ...currLetter);
    }
  }

  console.log(arrayOfChars);
  return arrayOfChars;
}

// First I tried just unshifting the last index and pushing it
// to the front, then realized that I was just putting them in the same
// order. 

// After that I thought I should splice and keeping adding to the front
// of the array. That way the i would just be what was originally the 
// first element.

// My next challenge was flattening the resulting array. Each letter was 
// put into it's own array via splice. When I splice onto the front of the arr
// in the for loop, I quickly destructure so that the string is all that's 
// spliced in.

// Below you'll find IC's solution. Pretty quick.

function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return arrayOfChars;
}
//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pdw3izd7SpMTBJqSy

function pagesNumberingWithInk(current, numberOfDigits) {
  let lastFit = current;
  let curr = current;
  let charTot = current.toString().length;
  while (charTot <= numberOfDigits) {
      lastFit = curr;
      curr += 1;
      charTot += curr.toString().length;
  }
  return lastFit;
}

//One of the test cases kept failing and I realized it was because
//lines 9 and 10 were swapped and curr had to be changed first.
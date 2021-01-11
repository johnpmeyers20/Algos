//https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/EQSjA5PRfyHueeNkj

//////////////////////////////////////////////////////////
/////////// Best Solution with Explanations///////////////
//////////////////////////////////////////////////////////

function isSumOfConsecutive2(n) {
  //# of instances where sum of 2+ consecutive numbers === n;
  let winningCombos = 0;
  //Outside loop sets consecutive number set's smallest integer
  //Math.ceil is used to make the algo more efficient 
  //Half of n added to half of n - 1 will always n or smaller
  for(let i = 1; i < Math.ceil(n/2); i++) {
      //tracks sum of current set of consecutive numbers
      let currTot = i;
      //Inner loop adds consecutive numbers to smallest integer until 
      //equalized or overshot
      for(let j = i+1; j < n; j++){
          currTot += j;
          //No need to check for other cases. Either there's a match or not.
          if(currTot === n){
              winningCombos += 1;
          }
      }
  }
  return winningCombos;
}


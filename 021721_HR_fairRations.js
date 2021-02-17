function fairRations(B) {
  // We set count to a reduce function to determine the final number
  // "target" is our accumulator, much like having a counter variable outside a for loop
  // By setting reduce on an array full of zeros, only the target will accrue value.
  // If we ran this on the B array itself, all the numbers in B would be thrown into the mix
  let count = new Array(B.length - 1)
    .fill(0)
    .reduce((target, item, index) => {
      // (B[index] % 2) would evaluate to a 0 for an even, 1 for an odd
      // !(B[index] % 2) flips the table making the return value a Boolean
        // As an even number would normally return 0 (which is falsy) the return values
        // are now true for evens, false for odds
      // !!(B[index] % 2) applies another NOT thus return values become false for evens, true for odds
      // If the first statement evaluates to true (ie is an odd number) then the second statement is 
        // evaluated. Evaluation of the second statement results in the B Array's next value (B[index + 1])
        // being incremented by one AND 2 being added to the reduce function's accumulator value target
      !!(B[index] % 2) && (B[index + 1]++, (target += 2));
      // At this point, it's not important that the previous value wasn't incremented as 
      // we're always moving forward

      // This is a multiline function so there was no implicit return to the reduce function. 
      // It must be returned manually
      return target;
    }, 0); // Always add the 0 to the end of reduce functions to avoid errors, assuming your target
            //starts at 0.
    
    // If the last index of B is even (which will return true do to the single bang), return count;
    // Otherwise NO must be returned as something clearly couldn't be set to an even value;
  return !(B[B.length - 1] % 2) ? count : "NO";
}
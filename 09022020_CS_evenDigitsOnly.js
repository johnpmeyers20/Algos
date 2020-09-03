//Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
  return n
    .toString()
    .split("")
    .every((i) => i % 2 === 0);
}

//The toString() function changes the given number to a string
//split('') method breaks string into an array of chars
//The every() method checks that every element modulo 2 is 0
//ie even. If so, the expression evaluates to the boolean true
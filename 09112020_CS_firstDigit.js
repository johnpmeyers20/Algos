//Find the leftmost digit that occurs in a given string.

//Because it's a string and I have to find something
//I figured the quickest route is through regular expression

function firstDigit(inp) {
  return inp.match(/\d/)[0];
}

// Correct variable names consist only of English letters,
//digits and underscores and they can't start with a digit.
//Check if the given string is a correct variable name.

function variableName(name) {
  return name.match(/[_a-zA-Z]\w*/g).toString() === name ? true : false;
}

//match is a string method used with regex (str.match(regex))
//This will return the matching values from within the
//string as elements in an array
//the .toString() method converts the elements from the array
//to strings
//if the converted, matched string is identical to the orig
//then the whole string passed, meaning it's a valid
//variableName

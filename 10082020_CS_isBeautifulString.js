//A string is said to be beautiful if each letter
//in the string appears at most as many times as the
//previous letter in the alphabet within the string;
//ie: b occurs no more times than a; c occurs no
//more times than b; etc.

//Given a string, check whether it is beautiful.

function isBeautifulString(inp) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  //arrange letters of input string ascending so
  //we can test whether the given letter's quantity is
  //<= that of the previous letter in the alphabet.
  let arr = inp.split("").sort().join("");
  //Next three lines check if input string contains consecutive
  //letters and returns false if not the case. This was added due to 'zaa'
  //fail.
  let uniq = [...new Set(arr)].join("");
  let consecutiveCheck = alph.match(uniq);
  if (consecutiveCheck === null) return false;
  //Breaks sorted string into groups of the same character
  let byLet = arr.match(/([a-z])\1*/g);
  //Gives an array of the quantities of each character in string
  let quans = byLet.map((i) => i.length);
  //Checks that the quantity of a given letter is less than or equal to
  //the preceeding letter
  let pass = quans.slice(1).map((v, i) => v <= quans[i]);
  //Checks that that's always the case
  let bigPass = pass.every((i) => i === true);
  console.log(arr);
  console.log("uniq", uniq);
  console.log("consecutiveCheck", consecutiveCheck);
  console.log(byLet);
  console.log(quans);
  console.log(quans.slice(1));
  console.log(pass);
  console.log(bigPass);
  console.log("test", alph.split("").includes("a"));
  //Both cases have to be true, as 'bbc' and 'yyz' failed
  //(because there are more b's than a's given that a is not present etc.);
  return bigPass && byLet[0][0] === "a";
}

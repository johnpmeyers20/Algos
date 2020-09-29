//Given a string, output its longest prefix which
//contains only digits.

//This algo is ripe for the picking with regex.
//I first solved it in 15 min without regex as follows:

function longestDigitsPrefix(str) {
  let word = str.split("");
  let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    console.log("i", i);
    if (digits.includes(word[i])) {
      console.log("if");
      arr.push(word[i]);
    } else {
      console.log("else");
      break;
    }
  }
  let ans = arr.join("");
  console.log(ans);
  return ans;
}

// the regex answer would look like so:

function longestDigitsPrefix(str) {
  return str.match(/^(\d*)/)[0];
}

//I ran into an issue here initially because I was using a +
//instead of a *. As a result, I was getting an error:
//cannot return 0 index of null. After switching to the star
//it worked perfectly.

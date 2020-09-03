//Given two cells on the standard chess board, determine
//whether they have the same color or not.

function chessBoardCellColor(cell1, cell2) {
  const dark = ["A", "C", "E", "G"];
  function indi(cell) {
    let arr = cell.split("");
    let c = arr[0];
    let r = arr[1];
    if (dark.includes(c)) {
      if (r % 2 === 0) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      if (r % 2 === 0) {
        return "light";
      } else {
        return "dark";
      }
    }
  }
  let first = indi(cell1);
  let second = indi(cell2);

  let ans = first === second ? true : false;
  return ans;
}

//As I'm receiving 2 inputs and need to determine the
// same thing about them, I define a function.
//The function determines the cells color based on the fact
//that I know what the starter cell's color is and I can
//deduce the individual cell from whether it's row is even
//or odd.

//Once I have the values, I just compare them and return bool

//I went back in order to shorten the code and came up with
//the following:

function chessBoardCellColor(cell1, cell2) {
  function indi(cell) {
    let letterVal = "ABCDEFGH";
    if (letterVal.indexOf(cell[0]) % 2 === 0) {
      return cell[1] % 2 === 0 ? "dark" : "light";
    } else {
      return cell[1] % 2 === 0 ? "light" : "dark";
    }
  }

  return indi(cell1) === indi(cell2) ? true : false;
}

//I realized that I could extract the information from the
//strings provided without breaking to an array. I also
//used ternarys instead of if/else in order to clean it up

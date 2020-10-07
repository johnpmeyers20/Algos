//Given the positions of a white bishop and a black
//pawn on the standard chess board, determine whether
//the bishop can capture the pawn in one move.

//The bishop has no restrictions in distance for each move,
//but is limited to diagonal movement.

//After looking at the 2 variables I made on the top for a
//while, I realized that an equadistant move in the opposing
//string would translate to diagonal movement.

function bishopAndPawn(bishop, pawn) {
  const letters = "abcdefgh";
  const numbers = "12345678";

  const numberize = (str) => {
    let arr = str.split("");
    arr[0] = letters.indexOf(arr[0]) + 1;
    return arr.join("");
  };
  const diff = (str1, str2) => {
    return Math.abs(str1[0] - str2[0]) === Math.abs(str1[1] - str2[1])
      ? true
      : false;
  };

  const bNum = numberize(bishop);
  const pNum = numberize(pawn);

  console.log(diff(bNum, pNum));
  return diff(bNum, pNum);
}

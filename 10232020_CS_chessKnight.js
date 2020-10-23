//Given a position of a knight on the standard chessboard, 
//find the number of different moves the knight can perform.

function chessKnight(cell) {
  const letters = 'abcdefgh';
  const actual = [letters.indexOf(cell[0])+1, parseInt(cell[1])];
  const moves = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2], [2,-1]];
  let ans = [];
  moves.map(i => {
      const first = i[0] + actual[0];
      const second = i[1] + actual[1];
      const winner = (num) => {
          return num > 0 && num <= 8;
      }
      if (winner(first) && winner(second)) {
          ans.push([first, second]);
      }
  })
  return ans.length;
}

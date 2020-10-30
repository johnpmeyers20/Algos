//Given a rectangular matrix containing only digits, 
//calculate the number of unique 2 × 2 squares in it.

function differentSquares(matrix) {
  let uniq = new Set();
  for (let i = 0; i < matrix.length-1; i++) {
      for (let j = 0; j < matrix[0].length-1; j++) {
          uniq.add(matrix[i][j].toString() + 
          matrix[i][j+1].toString() + 
          matrix[i+1][j].toString() + 
          matrix[i+1][j+1].toString());
      }
  }
  return uniq.size;
}

///////////////////////////////////////////////////////////////////////////
/////////////////////////// first attempt /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

function differentSquares(matrix) {
  const length = matrix.length;
  const width = matrix[0].length;
  
  let uniq = [];
  for (let i = 0; i < length-1; i++) {
      for (let j = 0; j < width-1; j++) {
          let curr = matrix[i][j].toString() + 
          matrix[i][j+1].toString() + 
          matrix[i+1][j].toString() + 
          matrix[i+1][j+1].toString();
          console.log(curr);
          if (!uniq.includes(curr)) {
              uniq.push(curr);
          }
      }
  }
  return uniq.length;
}
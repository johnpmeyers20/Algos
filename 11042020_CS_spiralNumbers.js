//Construct a square matrix with a size N × N 
//containing integers from 1 to N * N in a spiral order, 
//starting from top - left and in clockwise direction.

function spiralNumbers(n) {
  let matrix = [...Array(n)].map(i => Array(n).fill(null));
  let side = 1;
  let i = n;
  let count = 1;
  let x = 0;
  let y = 0;
  
  while (i > 0) { //4
      if (side === 1) {
          console.log('side1');
          for (let j = 0; j < i; j++) {
              if (j < i - 1) {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  y++;
                  count++;
              }
              else {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  x++;
                  count++;
              } 
          }
          side++;
          i--;
          continue;
      }
      else if (side === 2) {
          console.log('side2');
          for (let k = 0; k < i; k++) {
              if (k < i - 1) {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  x++;
                  count++;
              }
              else {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  y--;
                  count++;
              } 
          }
          side++;
          continue;
      }
      else if (side === 3) {
          console.log('side3');
          for (let l = 0; l < i; l++) {
              if (l < i-1) {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  y--;
                  count++;
              }
              else {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  x--;
                  count++;
              } 
          }
          side++;
          i--;
          continue;
      }
      else if (side === 4) {
          console.log('side4');
          for (let m = 0; m < i; m++) {
              if (m < i-1) {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  x--;
                  count++;
              }
              else {
                  // console.log('side',side,'x',x,'y',y,'count',count);   
                  matrix[x][y] = count;
                  y++;
                  count++;
              } 
          }
          side = 1;
          continue;
      }
      else {
          console.log('something\'s amiss!')
      }
  }

  console.log(matrix);
  return matrix;
}
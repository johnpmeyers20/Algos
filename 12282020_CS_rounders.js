//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/H5PP5MXvYvWXxTytH

function rounders(n) {
  let arr = n.toString().split('').map(i => parseInt(i));
  for (let i = arr.length-1; i > 0; i--) {
      if (arr[i] >= 5) {
          arr[i-1]++;
      }
      arr[i] = 0; 
  }
  return parseInt(arr.join(''));
}

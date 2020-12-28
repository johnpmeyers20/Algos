//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5

function increaseNumberRoundness(n) {
  let arr = n.toString().split('');
  for (let i = arr.length-1; i >= 0; i--) {
      console.log(i);
      if (arr[i] !== '0' && arr[i-1] === '0') return true;
  }
  return false;
}

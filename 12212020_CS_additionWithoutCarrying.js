//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S

function additionWithoutCarrying(param1, param2) {
  let ans = [];
  let str1 = param1.toString();
  let str2 = param2.toString();
  let diff = str1.length - str2.length;
  if (diff && diff < 0) {
      str1 = ('0'.repeat(Math.abs(diff))).concat(str1);
  }
  else if (diff && diff > 0) {
      str2 = ('0'.repeat(diff).concat(str2));
  }
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  for (let i = 0; i < arr1.length; i++) {
      ans.push((parseInt(arr1[i]) + parseInt(arr2[i]))
          .toString()
          .split('')
          .reverse()[0]);
  }
  console.log(ans);
  return parseInt(ans.join(''));
}


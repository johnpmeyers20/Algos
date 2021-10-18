function sumFibs(num) {
  let prevNum = 0;
  let currNum = 1;
  let ans = 0;
  while (currNum <= num) {
    console.log('prev', prevNum, 'curr', currNum, 'ans', ans);
    if (currNum % 2 !== 0){
      ans += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }
  console.log(ans);
  return ans;
}

sumFibs(4);
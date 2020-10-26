//Given some integer, find the maximal number 
//you can obtain by deleting exactly one digit 
//of the given number.

function deleteDigit(n) {
  const num = n.toString().split('');
  // console.log('num: ', num);
  let options = [];
  for (let i = 0; i < num.length; i++) {
      options.push(parseInt(num.slice(0,i).concat(num.slice(i+1)).join('')));
  }
  // console.log(options);
  let ans = options.reduce((a,b) => Math.max(a,b));
  console.log(ans);
  return ans;
}
//https://www.hackerrank.com/challenges/kaprekar-numbers/problem

function kaprekarNumbers(p, q) {
  // let lowest = Math.ceil(Math.sqrt(p));
  // let highest = Math.floor(Math.sqrt(q));
  // console.log('lowest', lowest);
  // console.log('highest', highest);
  let kaprekars = '';
  // for (let i = lowest; i <= highest; i++) {
  for (let i = p; i <= q; i++) {
      const square = i ** 2;
      const rLen = i.toString().length;
      const splitNum = square.toString().split('');
      let r;
      let l;
      let squareLen = square.toString().length;
      if (squareLen === 1) {
          l = 0;
          r = parseInt(splitNum.join(''));
      }
      else {
          let flipped = splitNum.reverse();
          l = parseInt(flipped.slice(rLen).reverse().join(''));
          r = parseInt(flipped.slice(0,rLen).reverse().join(''));
      }
      // console.log('i', i);
      // console.log('square', square);
      // console.log('rLen', rLen);
      // console.log('splitNum', splitNum);
      // console.log('squareLen', squareLen);
      // console.log('r', r);
      // console.log('l', l);
      // console.log('r + l: ', r + l);
      // console.log('r + l === square', r + l === square);
      // console.log('----------------------')
      
      if (r + l === i) kaprekars += i + ' ';
  }
  let ans;
  if (kaprekars === '') {
      ans = 'INVALID RANGE';
  } else {
      ans = kaprekars;
  }
  
  console.log(ans);
  // console.log(typeof kaprekars);
  // return kaprekars.toString();
}

//I learned quite a bit on this one. First and foremost,
//after much contemplation -- ehem not frustrating at all --
//I was reminded that the primitive type Number doesn't have a 
//length property.
//My next challenge was getting the right set of numbers to 
//be equal to the original number. For that I reversed the 
//array, sliced what I needed and reversed the slices
//Lastly, I was trying to return everything in an array,
//but it needed to be space seperated values on a single line.
//see line 37 for that.
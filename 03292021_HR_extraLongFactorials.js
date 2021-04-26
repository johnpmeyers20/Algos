//https://www.hackerrank.com/challenges/extra-long-factorials/problem

////////////////////////////////////////////////////////
////////////////// First Solution //////////////////////
////////////////////////////////////////////////////////

function extraLongFactorials(n) {
  let total = BigInt(1);
  for (let i = n; i > 0; i--) {
      // console.log('i',i);
      total *= BigInt(i);
      // console.log('total', total);
  }
  console.log(total.toString());
}

////////////////////////////////////////////////////////
//////////////// Memoized Solution /////////////////////
////////////////////////////////////////////////////////

// function extraLongFactorials(n) {
//   let memoization = [BigInt(0), BigInt(1)];

//   const factorial = num => (typeof memoization[num] !== 'number')
//       ? ((num - BigInt(1)) > 0
//           ? (num * factorial(num - BigInt(1)))
//           : BigInt(1)
//       )
//       : memoization[num]

//   console.log(String(factorial(BigInt(n))));
// }

////////////////////////////////////////////////////////
////////////// My Memoized Solution ////////////////////
////////////////////////////////////////////////////////

function memoizer(fun) {
  let cache = {};
  return (n) => {
    if (cache[n] != undefined) {
      // return cache[n]
      console.log(cache[n]);
    }
    else {
      let result = fun(n);
      cache[n] = result;
      // return result;
      console.log(result);
    }
  }
}

memoizer(extraLongFactorials(20));

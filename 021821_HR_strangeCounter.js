//https://www.hackerrank.com/challenges/strange-code/problem

function strangeCounter(t) {
  //base should be doubled
  let base = 1;
  while (((3*base)-2) < t) {
      // console.log('base', base);
      base*=2;
  }
  let start = (3*base)-2;
  console.log('start',start);
  let diff = Math.abs(start - t);
  if (diff) return diff;
  return start+2;
}
//https://www.hackerrank.com/challenges/big-sorting/problem


//This one took a while to understand but I'm happy with the solution
//the sort method invokes the compare function on non-undefined elements
//see description in sort docs on mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function bigSorting(unsorted) {
  let sorted = unsorted.sort((a, b) => {
    //the sort is based on the length of the elements
    //if the length is the same, then the values themselves are compared
    //the compare function evaluates based on negative, 0, or a positive number
    //-1 and 0 leave the order of the elements unchanged
    //1 puts b before a, switching the elements

      if (a.length === b.length) { 
          return a > b ? 1 : -1; 
      }
      
      return a.length - b.length;
  });
  
  console.log(sorted);
  return sorted;
}
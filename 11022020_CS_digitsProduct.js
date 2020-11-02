//Given an integer product, find the smallest 
//positive(i.e.greater than 0) integer the 
//product of whose digits is equal to product.
//If there is no such integer, return -1 instead.

function digitsProduct(prod) {
  for (let i = 1; i < 10000; i++) {
      let numba = [...i.toString()].reduce((a,c) => a*c);
      if (numba == prod) return i;
  }
  return -1;
}
//https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  let common = [...new Set(arr)]
      .map(i => arr.filter(j => i === j))
      .sort((a,b) => b.length - a.length)[0][0];
  return arr.filter(i => i !== common).length;
} 

//For this exercise I quickly determined the most 
//common element in the array and then gave the length
//of the remaining values in the array.
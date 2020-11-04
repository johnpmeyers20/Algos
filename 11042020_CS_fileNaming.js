//You are given an array of desired filenames 
//in the order of their creation.Since two files 
//cannot have equal names, the one which comes 
//later will have an addition to its name in a 
//form of(k), where k is the smallest positive 
//integer such that the obtained name is not used yet.

//Return an array of names that will be 
//given to the files.

function fileNaming(names) {
  let arr = [];
  for (let i in names) {
      let count = 0;
      let tmp = names[i];

      while (arr.indexOf(names[i]) > -1) {
          count++;
          names[i] = tmp + "(" + count + ")";
      }
      
      arr.push(names[i]);
  }
  return arr;
}

//This one was a doozy at first
//Most important is the differentiation between tmp and the current element
//when the current element's value is changed in the original array,
//you still have the original value stored as tmp. Thus you can still get
//values like doc(1)(1) and doc(2);

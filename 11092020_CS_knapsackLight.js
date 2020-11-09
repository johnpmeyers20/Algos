//You found two items in a treasure chest! The 
//first item weighs weight1 and is worth value1, 
//and the second item weighs weight2 and is worth 
//value2.What is the total maximum value of the 
//items you can take with you, assuming that your 
//max weight capacity is maxW and you can't come 
//back for the items later ?

//Note that there are only two items and you can't 
//bring more than one item of each type, i.e.you 
//can't take two first items or two second items.

//////////////////////////////////////////////////////
///////////////////// takeaway ///////////////////////
//////////////////////////////////////////////////////

//The best solution here is very elegant. If you have a 
//statement containing a boolean and a number the number
//is returned

//////////////////////////////////////////////////////
/////////////////// best solution ////////////////////
//////////////////////////////////////////////////////

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  return Math.max(
      maxW >= weight1 && value1,
      maxW >= weight2 && value2,
      maxW >= weight1 + weight2 && value1 + value2
  );
}

//////////////////////////////////////////////////////
////////////////// first solution ////////////////////
//////////////////////////////////////////////////////

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  const weights = [weight1, weight2];
  const vals = [value1, value2];
  let heavier = Math.max(...weights);
  let lighter = Math.min(...weights);
  let indOfHeavier = weights.indexOf(Math.max(...weights));
  let indOfLighter = weights.indexOf(Math.min(...weights));
  if (weight1 + weight2 <= maxW) {
      return value1 + value2;
      }
  else if (heavier <= maxW && lighter <= maxW) {
      return Math.max(value1, value2);
  }
  else if (heavier <= maxW) {
      return vals[indOfHeavier];
  }
  else if (lighter <= maxW) {
      return vals[indOfLighter];
  }
  else {
      return 0;
  }
}
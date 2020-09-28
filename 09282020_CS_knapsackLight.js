//You found two items in a treasure chest! The first item
//weighs weight1 and is worth value1, and the second item
//weighs weight2 and is worth value2.What is the total maximum
//value of the items you can take with you, assuming that
//your max weight capacity is maxW and you can't come back
//for the items later ?

//Note that there are only two items and you can't bring more
//than one item of each type, i.e.you can't take two first
//items or two second items.

function knapsackLight(val1, w1, val2, w2, maxW) {
  //If both numbers fit in the max, the combined value is returned.
  if (w1 + w2 <= maxW) return val1 + val2;
  //if largest number of 2 is smaller than max, return largest value
  if (Math.max(w1, w2) <= maxW) return Math.max(val1, val2);
  //The last statement filters out all cases where the larger number
  //if applicable. So we know at this point, it must be the smaller number!

  //if the smaller number fits in the max, return the coinciding smaller value.
  if (Math.min(w1, w2) <= maxW) return w1 < w2 ? val1 : val2;

  //if up to this point nothing's worked, return 0
  //this works for example when both numbers are larger than max
  return 0;
}

//TAKEAWAY: You can use if statements as a filter.
//If there's a true value it will return, if not your have the
//return at the end of the function which will be the default.

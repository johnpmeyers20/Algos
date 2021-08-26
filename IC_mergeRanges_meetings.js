function mergeRanges(meetings) {

  // Merge meetings ranges
  // Sort meetings so that we can be sure that we're starting with the first and analyzing sequentially
    // BigO 
      // Javascript uses QuickSort
      // Time - best / average: O(n log(n)), worst: O(n ^ 2)
      // Space - O(log(n))
  meetings.sort((first, second) => first.startTime - second.startTime);
  // Cycle through sorted meeting times
  for (let i = 0; i < meetings.length - 1;) {
    // if the first meeting's endTime lasts until, or overlaps, the next meeting's startTime
    if (meetings[i].endTime >= meetings[i + 1].startTime) {
      // and the first meeting's endTime is before that of the second
      if (meetings[i].endTime < meetings[i + 1].endTime) {
        //set the first meeting's endTime to that of the second
        //this is protection against the meeting contains other meeting edgecase 
        meetings[i].endTime = meetings[i+1].endTime;
      }
      // all cases, we need to remove the second object to condense our arr
      meetings.splice(i+1,1);
    }
    // if the second object was removed, we need to keep i at 0 for the next iteration in 
    // order to compare the modified first object with the new second. Otherwise, we can 
    // continue starting with the next object.
    else {
      i++
    }
  }
  console.log(meetings)
  return meetings;
}

// lose i++, length-1

//Takeaways: 
  // This was my first time ever removing the optional final-expression which updates the counter variable 
  // As a result I was able to keep i = 0 until there was no longer a case in point. If all passed finally we moved
  // on to the next object for evaluation.

  // In the for loops condition expression, it was important that I add a - 1 in order to keep my loop from evaluating undefined
  // when I want to do the last element. This is basic, but I had to think about it for a moment.

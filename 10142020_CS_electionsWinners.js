//Given an array of the numbers of votes given to 
//each of the candidates so far, and an integer k 
//equal to the number of voters who haven't cast 
//their vote yet, find the number of candidates who 
//still have a chance to win the election.

//The winner of the election must secure strictly 
//more votes than any other candidate.If two or more 
//candidates receive the same(maximum) number of 
//votes, assume there is no winner at all.

function electionsWinners(votes, k) {
  const highest = votes.reduce((a,b) => Math.max(a,b));
  if (votes.filter(i => i === highest).length > 1 && k === 0) return 0;
  if (k === 0) return 1;
  let contenders = votes.filter(i => i + k > highest);
  return contenders.length;
}
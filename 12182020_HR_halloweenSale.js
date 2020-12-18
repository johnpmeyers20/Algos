//https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
  let gameCount = 0;
  if (gameCount===0 && s < p) return 0;
  while (s >= m) {
      if (s < p) break;
      if (p > m) {
          s -= p;
          p -= d;
      }
      else {
          s -= m;
      }
      gameCount++;
  }
  console.log(gameCount);
  return gameCount;
}

//This one took me a long time for some reason. I was not accounting for the two edge cases
//line 5 and line 7 finally got me through.
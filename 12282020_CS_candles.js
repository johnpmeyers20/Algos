//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LAKReA3CR9EwkZGSz

///////////////////////////////////////////////////////////////
/////////////////////// best solution /////////////////////////
///////////////////////////////////////////////////////////////


function candles(candlesNumber, makeNew) {
  return candlesNumber + Math.floor(--candlesNumber/--makeNew);
}

///////////////////////////////////////////////////////////////
/////////////////////// first attempt /////////////////////////
///////////////////////////////////////////////////////////////

function candles(candlesNumber, makeNew) {
  let count = candlesNumber;
  let newC = Math.floor(count/makeNew);
  let rem = count % makeNew;
  console.log('count', count, 'newC', newC, 'rem', rem);
  while (newC > 0) {
      let tempC = newC;
      count += newC;
      newC = Math.floor((newC + rem)/makeNew);
      rem = (tempC + rem) % makeNew;
      console.log('count', count, 'newC', newC, 'rem', rem);
  }
  return count;
}
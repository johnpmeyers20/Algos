//https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM

function lineUp(commands) {
  let commArr = commands.split('');
  let sameCount = 0;
  let same = true;
  for (let step of commArr) {
      if (same && step === 'A') {
          sameCount++;
      }
      else if (same && step !== 'A') {
          same = !same;
      }
      else if (!same && step !== 'A') {
          same = !same;
          sameCount++;
      }
  }
  return sameCount;
}

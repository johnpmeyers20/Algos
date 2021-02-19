https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(n, c) {
  const stations = [...c].sort((a,b) => a - b);
  const start = stations[0];
  const end = (n-1) - stations[stations.length-1];
  
  let mids = 0;
  for (let i = 0; i < stations.length-1; i++) {
      let value = Math.floor((stations[i+1]-stations[i])/2);
      value > mids && (mids = value);
  }

  start > mids && (mids = start);
  end > mids && (mids = end);
  return mids;
}

//////////////////////////////////////////////////////////////////
/////////////////////   Explanation   ////////////////////////////
//////////////////////////////////////////////////////////////////

function flatlandSpaceStationsExplanation(n, c) {
  //I need to determine the largest minimum distance between a city and a station.
  //The distance from the beginning to the first is one way (it doesn't lie between stations). 
  //This same principal applies to the last value and the last station.
  //The distance between stations needs to be determined and compared to the start and end distance.

  //I could just use c, but I decided to create stations in order to avoid mutating the original value
  const stations = [...c].sort((a, b) => a - b);
  //Since the first city of the n range will always be 0, the distance to the first station would be
  //stations[0]-0, which is essentially just the first value stations[0]
  const start = stations[0];
  //because we're using 0-based logic, the last cities value will be n-1
  const end = (n-1) - stations[stations.length-1];
  
  //Previously I tried pushing to an array of the values and then reducing but it timed out.
  //Instead I'll just compare the value to the longest so far and store the longest
  let mids = 0;
  for (let i = 0; i < stations.length-1; i++) {
      let value = Math.floor((stations[i+1]-stations[i])/2);
      value > mids && (mids = value);
  }
  //The statements below are a concise way to set a value given that the first expression evaluates to true.
  //The second expression actually sets the variable when it is evaluated.
  start > mids && (mids = start);
  end > mids && (mids = end);
  return mids;
}
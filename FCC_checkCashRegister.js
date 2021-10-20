function checkCashRegister(price, cash, cid) {
  const denVal = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .1,
    "QUARTER": .25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  const r = num => +(Math.round(num + "e+2") + "e-2");
  const cidTotal = r(cid.map(i => i[1]).reduce((a,c) => a + c));
  console.log('cidTotal', cidTotal)
  let changeDue = r(cash - price);
  let ans = {
    status: "INSUFFICIENT_FUNDS",
    change: []
  }
  if (changeDue > cidTotal) return ans;

  let availableDens = cid.filter(i => i[1] > 0)
    .filter(i => denVal[i[0]] <= changeDue);
  let availableDensTotal = availableDens.map(i => i[1]).reduce((a,c) => a + c);
  console.log('availableDensTotal', availableDensTotal)
  console.log('changeDue initially', changeDue);
  if (availableDensTotal < changeDue) return ans;
  if (availableDensTotal === changeDue) {
    ans.status = 'CLOSED';
    ans.change = cid;
    return ans;
  }
  while (ans.status === "INSUFFICIENT_FUNDS" && changeDue > 0) {
    console.log('-------------------------------')
    let currDen = availableDens[availableDens.length - 1];
    let currDenVal = denVal[currDen[0]];
    console.log('currDen', currDen);
    if (currDen[1] < changeDue) {
      console.log('if currDen[1] < changeDue', currDen[1] < changeDue)
      ans.change.push(currDen);
      availableDens = availableDens.slice(0,availableDens.length - 1);
      changeDue = r(changeDue - currDen[1]);
    }
    else if (currDen[1] === changeDue) {
      console.log('else if currDen[1] === changeDue', currDen[1] === changeDue)
      ans.change.push(currDen);
      ans.status = "OPEN";
    }
    else {
      //get number of given denomination that can be removed from changeDue
      console.log('else');
      const greedyAmnt = Math.floor(r(changeDue/currDenVal))*currDenVal;
      if (greedyAmnt === 0) {
        availableDens = availableDens.slice(0,availableDens.length - 1);
        continue;
      }
      console.log('greedyAmnt', greedyAmnt)
      //adjust changeDue, 
      //remove currDen from cid
      currDen[1] = greedyAmnt;
      ans.change.push(currDen);
      changeDue = r(changeDue - greedyAmnt);
      availableDens = availableDens.slice(0,availableDens.length - 1);
    }
    console.log(ans);
    console.log('changeDue', changeDue)
    if (changeDue === 0) {
      ans.status = "OPEN";
    }
    //grab the biggest available den
    //run for loop to determine how many of said dem
      //can be added to ans.change
    //push to ans.change
    //remove value & array from availableDems
    //remove value from changeDue
  }
  return ans;

}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
 checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
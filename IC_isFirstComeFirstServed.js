function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
  let tIdx = 0;
  let dIdx = 0;
  let sIdx = 0;
  
  if (servedOrders.length > takeOutOrders.length + dineInOrders.length) return false;

  while (sIdx < (takeOutOrders.length + dineInOrders.length)) {
    const tVal = takeOutOrders[tIdx];
    const dVal = dineInOrders[dIdx];
    const sVal = servedOrders[sIdx];
    
    //if tVal is true && sVal === tVal
      //inc tIdx
    //if dVal is true && sVal === dVal
      //inc dIdx
    //if sVal != tval && sVal != dVal return false
    //inc 
    
    if (tIdx < takeOutOrders.length && sVal === tVal) {
      // console.log('hey');
      tIdx++;
    }
    else if (dIdx < dineInOrders.length && sVal === dVal) {
      // console.log('ho')
      dIdx++;
    }
    else {
      // console.log('go');
      return false;
    }
    sIdx++;
  }
  return true;
}

// This one I solved using the principles I'd learned, but I initially missed the
// edgecase inwhich there were more orders served than ordered.
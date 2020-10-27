//Check if the given string is a correct time 
//representation of the 24 - hour clock.

function validTime(time) {
  let vals = time.match(/\d+/g);
  return (vals[0] >= 0 && vals[0] <= 23) && (vals[1] >= 0 && vals[1] <= 59) ?
      true : false;
}
//https://www.hackerrank.com/challenges/acm-icpc-team/problem
//This was a beast and took me like 3 hours the reason being,
//I was intent on using bitwise operators initially.
//that failed EVERY SINGLE locked test case.
//Once I got away from that, things went more smoothly.
//I needed to console log a bunch to understand the triple 
//for loop but got it. 

//The key lies in the relative value of j to i and comparing
//the same index via k

function acmTeam(topic) {
  let max = 0;
  let numMax = 0;
  
  for (let i = 0; i < topic.length; i++) {
      for (let j = i+1; j < topic.length; j++) {
          let count = 0;
          for (let k = 0; k < topic[0].length; k++) {
              // console.log('i:',i,'j:',j);
              // console.log('topic[i][k]',topic[i][k]);
              // console.log('topic[j][k]', topic[j][k]);
              if (topic[i][k] === '1' || topic[j][k] === '1') {
                  count++
              }
          }
          // console.log('i:', i,'j:',j);
          // console.log('count', count);
          // console.log('----------------------')
          if (count > max) {
              max = count;
              numMax = 0;
          }
          if (count === max) numMax++;
      }
  }
  console.log(max, numMax);
  return [max, numMax];
}

// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

// Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
// Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.

function depositProfit(deposit, rate, threshold) {
  let rounds = 0;
  let counter = deposit;
  while (counter < threshold) {
    console.log(counter);
    counter += (rate / 100) * counter;
    rounds += 1;
  }
  console.log(rounds);
  return rounds;
}

// I chose a while loop because I didn't know how many times
//it had to run to complete.
//Solved in 5 minutes. Initially botched while block with (counter*=(rate/100)) and
//realized issue through console.log

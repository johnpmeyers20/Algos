//https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
//This one was a real ringer. Every time I get a circular array
//algo I feel like it breaks my mind a little;
//I had to cheat a bit on this one, but see my breakdown below:

function jumpingOnClouds(c, k) {
  let points = 100;
  let count = 0;
  //It is important here, that index is declared but not
  //a value. That'll change the first time the while
  //loop runs
  let index;
  //while index does note equal 0 AND points are greater
  //than 0. index !== 0 evaluates to true because, we 
  //declared index but didn't set it to 0. 
  while (index !== 0 && points >= 0) {
    //This next line only runs once, because after the 
    //initial run count will always be greater than 0.
    //the clappers over the index expression run that part
    //of the entire expression first and set index to 0 
    //simultaneously. This was a pretty new thing to me.
      count === 0 && (index = 0);
    //As it turns out, I was overconfident with my understanding
    //of the modulus operator until now. If a value is smaller 
    //than the total amount used in conjunction with a modulus
    //operator, than that number is retured. Mathematically
    //this is so, because in the case of for ex. (1 % 3),
    //1 / 3 = 0.333. So O, leaving the remainder of 1.
      index = (index + k) % c.length;
      points = c[index] > 0 ? points - 3 : points - 1;
      count++;
  }
  return points;
}
//I think the rest there is pretty straightforward. 
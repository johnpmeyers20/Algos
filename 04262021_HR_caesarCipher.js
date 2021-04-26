function caesarCipher(s, k) {
  // Write your code here
  const a = 'abcdefghijklmnopqrstuvwxyz';
  const aArr = a.split('');

  function indexToLetter(idx) {
      return a[idx];
  }
  
  function newLetter(l, num) {
      const posL = a.indexOf(l);
      const augL = posL + num;
      const newbieIndex = augL > (aArr.length - 1) ? augL % aArr.length : augL;
      return indexToLetter(newbieIndex);
  }
  
  let nArr = [];
  for (let i = 0; i < s.length; i++) {
      console.log('i', i)
      if (aArr.includes(s[i])) {
          nArr.push(newLetter(s[i], k));
      }
      else if (aArr.includes(s[i].toLowerCase())) {
          const mini = s[i].toLowerCase();
          const biggie = newLetter(mini, k);
          nArr.push(biggie.toUpperCase());
      }
      else {
          nArr.push(s[i]);
      }
  }
  console.log(nArr.join(''));
  return nArr.join('');
}
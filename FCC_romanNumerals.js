////////////////////////////////////////
////////// first attempt ///////////////
////////////////////////////////////////
function convertToRoman(num) {
  //Needs to Greedily remove numbers
  //Set up Object with Roman Numeral Values
  //Remove value from given number
  //concat roman numeral to string
  let total = num;
  let rom = '';
  let romNums = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  

  while (total > 0) {
    console.log('-------------------')
    //create an array of just keys from the Object
    //filter for numbers that don't exceed total
    const relevantKeyNums = Object.keys(romNums)
      .map(i => parseInt(i))
      .filter(i => i <= total);
    console.log(relevantKeyNums);
    // get largest number among remaining keys
    const largestApplicableNum = Math.max(...relevantKeyNums);
    console.log(largestApplicableNum);
    rom += romNums[largestApplicableNum];
    console.log(rom);
    total -= largestApplicableNum;
    console.log(total);
  }
  console.log(rom);
  return rom;
}
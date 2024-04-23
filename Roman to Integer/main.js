/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let arr = s.split("");
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
    case 'I':
      if (arr[i+1] == 'V' || arr[i+1] == 'X')
        temp -= 1;
      else
        temp += 1;
      break;

    case 'V':
        temp += 5;
      break;
    
    case 'X':
      if (arr[i+1] == 'L' || arr[i+1] == 'C')
        temp -= 10;
      else
        temp += 10;
      break;
      
    case 'L':
        temp += 50;
      break;
    
    case 'C':
      if (arr[i+1] == 'D' || arr[i+1] == 'M')
        temp -= 100;
      else
        temp += 100;
      break;
    
    case 'D':
        temp += 500;
      break;
    
    case 'M':
        temp += 1000;
      break;

    default:
      break;
    }    
  }
  return temp;
};

console.log(romanToInt("III"));//3
console.log(romanToInt("LVIII"));//58
console.log(romanToInt("MCMXCIV"));//1994
console.log(romanToInt("XLIX"));//49
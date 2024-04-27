/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  /*
  for (let i=0; i<prices.length-1; i++) {
      for (let j=i; j<prices.length; j++) {
          if(prices[j] - prices[i] > maxProfit) {
              maxProfit = prices[j] - prices[i];
          }
      }
  }
  */
  let frontPtr = 1, backPtr=0;
  while(frontPtr < prices.length) {
      const delta= prices[frontPtr]-prices[backPtr];
     if (delta > maxProfit) {
        maxProfit = delta;
     }
     if (delta < 0) {
      backPtr=frontPtr;
     }
     frontPtr++;
  }
  
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));//5
console.log(maxProfit([7,6,4,3,1]));//0
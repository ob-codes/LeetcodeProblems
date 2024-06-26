/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit=0;

  for(let i=1; i< prices.length; i++) {
      const delta = prices[i] - prices[i-1];
      if(delta > 0)
          maxProfit += delta; 
  }
  
  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));//7
console.log(maxProfit([1,2,3,4,5]));//4
console.log(maxProfit([7,6,4,3,1]));//0
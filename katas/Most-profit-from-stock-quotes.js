/* 
Most profit from stock quotes

 Return the most profit from stock quotes.

 Stock quotes are stored in an array in order of date. The stock profit is the difference in prices in buying and selling stock. Each day, you can either buy one unit of stock, sell any number of stock units you have already bought, or do nothing. Therefore, the most profit is the maximum difference of all pairs in a sequence of stock prices.

@param {array} quotes
@return {number} max profit
Example:

 [ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 [ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
 [ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)

 https://www.codewars.com/kata/597ef546ee48603f7a000057

*/

function getMostProfitFromStockQuotes(quotes) {
  let max = Math.max(...quotes);
  let i = 0;
  let profit = 0;

  while (quotes[i] < max) {
    profit = profit + (max - quotes[i]);
    i++;
  }

  return profit;
}

/* Kata 27.04.2021 */

function getMostProfitFromStockQuotes(quotes) {
  let maxProfit = 0;
  let maxStockPrice = Math.max(...quotes);
  let maxStockIndex = quotes.indexOf(maxStockPrice);

  function calculateMaxProfit(arr, _maxStockPrice, _maxStockIndex) {
    for (let i = 0; i < _maxStockIndex; i++) {
      maxProfit = maxProfit + (_maxStockPrice - arr[i]);
    }
    let newArr = arr.slice(_maxStockIndex + 1);
    _maxStockPrice = Math.max(...newArr);
    _maxStockIndex = newArr.indexOf(_maxStockPrice);
    if (newArr.length > 1) {
      calculateMaxProfit(newArr, _maxStockPrice, _maxStockIndex);
    }
  }

  calculateMaxProfit(quotes, maxStockPrice, maxStockIndex);
  return maxProfit;
}

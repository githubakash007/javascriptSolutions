function bar(){
   // console.log('outer');
    function bar(){
     //   console.log('inner');
    }
   // console.log(bar());
}

bar();

stock_prices = [10, 7, 5, 8, 11, 9]

const get_max_profit = (stock_prices) => {
     let noOfPrice = stock_prices.length;
     let min,max = 0;
      min = Math.min(...stock_prices);
      max = Math.max(...stock_prices);

      return max-min;
}

console.log(get_max_profit(stock_prices));
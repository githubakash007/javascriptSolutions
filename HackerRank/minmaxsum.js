//https://www.hackerrank.com/challenges/mini-max-sum/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

//Logic: remove one element form array in for loop and add-up all the remaining element in the array 
// and compare the sum from the earlier value stored for min OR max in the result object
function miniMaxSum(arr) {
    let result= {};
    for(let i=  0 ; i < arr.length;i++){
        // let temp = arr.filter(x => arr.indexOf(x) !== i);
      
          let sum = arr.reduce((a,e) => a + e , -arr[i]);
          result["min"] = result["min"] === undefined?sum: result["min"] < sum?result["min"]: sum;
          result["max"] = result["max"] === undefined? sum: result["max"] > sum?result["max"]: sum; 
         
 
    }
 
    console.log(result["min"]+ ' ' + result["max"]);
    
 }

 miniMaxSum([1 ,2, 3, 4, 5]); //10 14
 miniMaxSum([5,5,5,5,5]); //20 20
 
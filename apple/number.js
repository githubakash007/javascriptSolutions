


const factorial =  (number) => {
    let result = 1;
       if(number === 0 || number === 1 ) return 1;
       while(number > 1 ){
      result = result * number;  
      number =  number -1;
   }
   return result;
   }
console.log(factorial(5));

var storm = function(){};
storm.prototype.p = 'rain';
var wstorm = function(){};
wstorm.prototype = new storm();
wstorm.prototype.p ='snow';
var bob = new wstorm();
console.log(bob.p);
const mod = (a,b) => {
   while(a >= b){
       a -= b;
   }

   return a >=0?a:-a;
}

console.log(mod(7,3));
console.log(mod(-7,3));


 function f(x){
       let i =  x++;
       console.log(i);

     (x = x-3) && ++x

     return x--;
 }

 console.log(f(2));
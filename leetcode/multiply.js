//https://www.geeksforgeeks.org/multiply-two-numbers-without-using-multiply-division-bitwise-operators-and-no-loops/
//Multiply two integers without
// using multiplication, division and bitwise operators, and no loops

const multiply = (a ,b) => {
    if( b === 0){
        return 0;
    }

    if(b > 0){
       return (a + multiply(a,b-1));       
    }

    if(b < 0){
        return -multiply(a,-b);
    }
}


console.log(multiply(5,6));
console.log(multiply(5,-16));
console.log(multiply(-6,6));
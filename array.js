// find duplicate string in an string array
//input: ['ab',bc''bb','bb','ab','hello','hell']
// output: ['bb','ab']

const findDuplicate = (arr) => {
    resultObj = {};
   arr.forEach(str => {
     resultObj[str]? resultObj[str] += 1 : resultObj[str] = 1; 
   });

   Object.keys(resultObj).forEach(x =>  {
       resultObj[x] > 1? console.log(`string: ${x} , repetation: ${resultObj[x]}`): '';
    });
   
}

findDuplicate(['ab','bc','bb','bb','ab','hello','hell']);





//flat an array ( array can have any child array and their child too can hv array)

let input = [1, 2, [], 3, [4, 5, 6], 7, [1, 1, [2, 2]], 4, [1, [2, [3, []]]]]

const flatArr = (inputArr) => {
    let result = [];
    if (inputArr && inputArr.length) {
        inputArr.forEach(ele => {
            if (Array.isArray(ele)) {
                result = result.concat(flatArr(ele));
            }
            else {
                result.push(ele);
            }

        });
    }
    return result;
}

console.log(flatArr(input));

//find palindrome string in an array of  string
 let strArray = ['madam','tom','apple','aa'];
  
 const findPalinDromeStr = (strArr) => {
     let result = [];
       if(strArr && strArr.length){
            strArr.forEach(str => {
              if(str === str.split('').reverse().join('')) result.push(str);
           
            });

       }
       return result;
 }

 console.log(findPalinDromeStr(strArray));

 //write reduce function
 console.log([1,2,3].reduce((x,y) => x + y,4 ))
Array.prototype.myreduce = function(callback, initialValue){
   let accu = initialValue === undefined?0:initialValue;
    this.forEach(x => {
        console.log("ini val = ", accu);
        accu = callback(accu, x)
    });

    return accu;

}

console.log([1,2,3].myreduce((x,y) => x + y ))


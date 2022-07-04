const sheduler = (f, n) => {
    setTimeout(f, n);
}


// print a multipication table for a given number

const gettable = (n) => {
    let finalResult = [];
    let unique = new Map();
    for (let i = 1; i <= n; i++) {
        let result = [];
        for (let j = 1; j <= n; j++) {
            result.push(i * j);
            unique.set(i * j, 0);
        }

        finalResult.push(result);
    }
    console.log([...unique.keys()]);
    return finalResult;
}

console.log(gettable(3));
console.log('table output');

const oneMore = (x, n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (x % i === 0 && x / i <= n) {
            count++;
        }
    }

    return count;
}

//console.log(oneMore(9, 3));


//console.log([...new Set([...[1, 2, 3], ...[2, 3, 5]])]);

const getMaxProfit = (arr) => {
    let min, max, profit = 0;
    let bs = new Map();
    let result = [];
    let bsobj = {};
    if(arr.length ===1){
        return new error("Only one item");
    }
    let i =0;
    while(i < arr.length){
        bsobj = {};
        //get mimimum
        while(i < (arr.length - 1) && arr[i] > arr[i + 1]){
            i++;
        }
         
        bsobj["buy"] = arr[i];
         
        bs.set(arr[i],arr[i]);

        i++;
       
        while(i < arr.length && arr[i+1] > arr[i] )
         {
             i++;
         }
         
         bsobj["sell"] = arr[i];
         bs.set(arr[i],arr[i]);
         i++;
         result.push(bsobj);
    }

    console.log(bs);
    console.log(result);

   profilt =  result.reduce((a,obj) => {
         return a += obj["sell"] === undefined?0: obj["sell"] - obj["buy"];
          
    },0);

    return profilt;
    //console.log({profilt});
}

console.log(getMaxProfit([100,180,260,310,40,535,695]));
console.log(getMaxProfit([7,1,5,3,6,4]));

let s = new Map();
s.set(1,'sdfsf');
s.set(2,'sdfsf');
s.set(3,'sdfsf');
//console.log([...s]);

// let y = 1;
// while(y <6){
//     console.log(y);
//     y++;
// }
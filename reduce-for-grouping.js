//input

let obj = [
    {
        a: 3,
        b: 5
    },
    {
        a: 9,
        b: 2
    },
    {
        a: 1,
        b: 2,
        c: 6
    },
]

 
 let result = obj.reduce((a,item) => {
    for([key,value] of Object.entries(item)){
       a[key] =  a[key]? a[key] + value: value;
    }

    return a;

}, {});

console.log([result]);
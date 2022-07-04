let str = "akash is great";

console.log(str.split(' ').reverse().join(' '));

console.log(str.split(' ').reverse().join(' ').split('').reverse().join(''));
console.log(str.split('').reverse().join('-'));

let arr = [2,3,4,2,5,3]
let uniqueArr  = [...new Set(arr)] 
console.log(uniqueArr);
let sum = uniqueArr.reduce(((a,x) => {
    return  x+a
}),10);
console.log(sum);

var obj =  [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P2', 'value': 1000 },
    { 'name': 'P3', 'value': 450 }
];

let resultArr = [];
let uniqueKey = [...new Set(obj.map(x => x.name))];
console.log(uniqueKey);
 uniqueKey.forEach((e) => {
       resultArr.push(obj.filter(y => y.name === e).reduce((a,ele) => {
        let val = a['name']? a['name']+ele.value:ele.value;
        return {name:e,value:val};
       },{}));       
 });

 console.log(resultArr);

 

 let result = {};
 const findDuplicate = (arr) => {
    arr.forEach(ele => {
        result[ele] =  result[ele]?result[ele]+1:1;
    });   

    Object.keys(result).filter(x => result[x] > 1).forEach(e => {
        console.log(`key ${e} is repeting ${result[e]} times`);
    });
    //console.log(result);     
};
findDuplicate(['ab','bc','bb','bb','ab','hello','hell']);

function slow(callback) {
    setTimeout(function(){
        if (Math.random() > 0.5) {
            return callback("Error 417",null)
        }
        callback(null, {id:123})
    },500);
}
let exec = {
     
    done: function(fn1){
        fn1();
        return exec;
    },
    fail: function(fn2){
        fn2();
        return exec;
    }
//write your code here
}


exec.done(() => console.log('done called')).fail(() => console.log('failed called'));

//exec().done(() => console.log('func1')).fail(() =>console.log('func2'));
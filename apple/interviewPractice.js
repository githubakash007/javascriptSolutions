var obj =  [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P2', 'value': 1000 },
    { 'name': 'P3', 'value': 450 }
];

let output = [];
let result = {};
let uniqueName = Array.from(new Set(obj.map(x => x.name)));
uniqueName.forEach(n => {
   output.push(obj.filter(x => x.name === n).reduce((a, item) => {
      
       let val = !a['name']? item.value:a['value']+item.value;
        
        return {name:n,value:val};
    },{})
);
});

console.log(output);


const findDuplicate = (arr) => {
    let result = {};
    arr.forEach(str => {
        result[str]? result[str] +=1: result[str] = 1;
    });

    console.log(result);

    let firstDuplicate = Object.keys(result).filter(key => result[key] > 1)[0];
     console.log(firstDuplicate);
 Object.keys(result).forEach(key => {
     if(result[key] > 1){ 
       console.log(`string ${key}, repetation: ${result[key]}`); 
    }
 });
};

findDuplicate(['ab','bc','bb','bb','ab','hello','hell']);

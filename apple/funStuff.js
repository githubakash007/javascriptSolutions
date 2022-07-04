var obj = [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P3', 'value': 450 }
];

let keys = Array.from(new Set(obj.map(x => x.name)));
let result = [];
keys.forEach(x => {
    result.push(obj.filter(y => y.name === x).reduce((iniVal, item, index) => {
        let p = iniVal[x] ? iniVal[x] : 0;
        iniVal[x] = item.value + p;
        return iniVal;
    }, {})
    );
});

console.log(result);


let a=  [1,2,3];
console.log(a.reduce((a,b) => a+ b));
let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

const isSuperset = (setA, subset) => {
    for (let item of subset) {
        if (!setA.has(item))
            return false;
    }
    return true;
}

console.log(isSuperset(setA,setB));

const Union = (setA,setB) => {
    return new Set([].concat([...setA],[...setB]));
}

console.log(Union(setA,setC));

const intersection = (setA,setB) => {
    let _intersection = new Set();
    for(let item of setB){
          if(setA.has(item)){
              _intersection.add(item);
          }
    }
    return _intersection;
}

console.log(intersection(setA,setC));
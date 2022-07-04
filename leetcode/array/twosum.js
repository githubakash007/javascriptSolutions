//url:  https://leetcode.com/tag/array/
//two sum

const twoSum = (arr, target) => {
    const result = [];
    try {
        for (let x = 0; x < arr.length; x++) {
            // console.log("value of x =",x);
            for (let y = 0; y < arr.length; y++) {
                // console.log("value of y =",y);
                if (arr[y] !== arr[x] && arr[x] + arr[y] === target) {
                    result.push(x);
                    result.push(y);
                    return result;
                }
            }
        }
    }
    finally {
        if (result.length === 0) {
            console.log("No sulution exist");
        }
    }
}

console.log(twoSum([1, 2, 3], 4));



const twoSum1 = (arr, target) => {
    const result = [];
    let map = new Map();
    try {
        for (let x = 0; x < arr.length; x++) {
            map.set(arr[x],x);
        }

        for (let y = 0; y < arr.length; y++) {
             let complement = target - arr[0];
            if (map.has(complement) && map.get(complement) !== y) {                
                result.push(map.get(complement));
                result.push(y);
                return result;
            }
        }
    }

    finally {
        if (result.length === 0) {
            console.log("No sulution exist");
        }
    }
}

console.log(twoSum1([1, 2, 3], 4));



// function returnMe() {
//     for (var j = 0; j < 3; j++) {
//         console.log("outer loop");
//         for (var i = 0; i < 3; i++) {
//             console.log("inner loop");
//             if (i === 0) break;
//         }
// //     }

// }

// console.log(returnMe());

let p = new Map();
p.set(3,0);

console.log(p.get(3));
// https://leetcode.com/problems/plus-one/

const plusOne1 = function (digits) {
    for (let i = digits.length -1; i >= 0; i--) {
        if (digits[i] < 9) {

            digits[i] = digits[i] + 1;
            return digits;
        }
        else {
            digits[i] = 0;
        }


    }
   // console.log(digits);
//    console.log('pppppppppppppppppppp');
//     console.log("ggggggggg");
//     digits.unshift(1);
//     return digits;
}

var plusOne = function (digits) {

    let result = digits.reduce((a, x, index, arr) => {
        //  console.log(index);
        //  console.log(Math.pow(10, (arr.length - (index+1))));
        // console.log(x* Math.pow(10, (arr.length - (index+1))));
        return a += x * Math.pow(10, (arr.length - (index + 1)));
    }, 0);

    result += 1;
    // console.log(result);

    return result.toString().split('').map(Number);
};

// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([1,2,3]));
 //console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4]));

//console.log(plusOne1([4, 3, 2, 1]));
console.log(plusOne1([4, 3, 2, 9]));
//console.log(plusOne1([1, 2, 3]));
//console.log(plusOne1([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4]));

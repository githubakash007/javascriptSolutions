// validate an number based on the  Luhn algorithm, see the below link for more detail
// https://www.geeksforgeeks.org/luhn-algorithm/

const IsCardNUmberValid = (cn) => {
    if (cn && typeof cn === 'number') {
        let input = cn;
        let digitArr = cn.toString().split('').reverse();
        for (let i = 1; i < digitArr.length; i = i + 2) {
            digitArr[i] = digitArr[i] * 2;
            digitArr[i] = digitArr[i].length > 1 ? addStringDigit(digitArr[i]) : digitArr[i];
        }
        let total = 0;
        digitArr.forEach(n => {
            total += parseInt(n);
        });

        if (total % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

// const addStringDigit = (inputStr) => {
//     let sum = 0;
//     inputStr.split('').forEach(n => {

//         sum += parseInt(n, 10);

//     });

//     return sum;
// }

const addStringDigit = (inputStr) => inputStr.split('').map(x => parseInt(x,10)).reduce( (a,b) => a + b);

console.log(IsCardNUmberValid(79927398713)); // true
console.log(IsCardNUmberValid(89927398713)); // true

console.log(addStringDigit('123'));
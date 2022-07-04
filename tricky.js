for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 10);
}
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }.bind(this,i), 10);
// }
for (var i = 0; i < 5; i++) {
  
    setTimeout(function (i) {
        console.log(i);
    }.bind(this,i), 10);
}

for (let i = 0; i < 5; i++) {
  //  setTimeout((() => console.log(i)), 10);
}

// let numbers = [1,2,3];
// numbers[10] = 100;
// console.log(numbers[4]);

// let c = [1,2,3].map(num => {
//     if(typeof num === 'number')
//        return num*2;
// });

// console.log(c);

// let config = {
//     alert: setInterval(function(){  console.log('invoked')},1000)
// }
// config = null;

const person = {"name":"akash", age:55};
//console.log(Object.entries(person));

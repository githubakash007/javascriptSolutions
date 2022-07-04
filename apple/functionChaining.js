//Source of the question: https://www.thatjsdude.com/interview/js2.html#cacheFunction
// JQuery style chaining
// Question: If you need to implement the following chaining with call back, how will you implement it?
// function slow(callback) {
//     setTimeout(function(){
//         if (Math.random() > 0.5) {
//             return callback("Error 417",null)
//         }
//         callback(null, {id:123})
//     },500);
// }

// function exec(fn){
// //write your code here
// }

// exec(slow).done(function(data){
//     console.log(data);
// }).fail(function(err){
//     console.log("Error: " + err);
// })

//----------------------------Answer begin--------------------------

function slow(callback) {
    setTimeout(function(){
        if (Math.random() > 0.5) {
            return callback("Error 417",null)
        }
        callback(null, {id:123})
    },500);
}
function exec(fn){
     
    done: function(fn1){
        fn1();
        return exec;
    }
    fail: function(fn2){
        fn2();
        return exec;
    }
//write your code here
}

exec(slow).done(() => console.log('done called')).fail(() => console.log('failed called'));


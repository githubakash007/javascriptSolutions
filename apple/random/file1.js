var x = function(){
    var y = 5;
     return {
         getX: function(){
             return y;
         },
         setX: function(v){
             y = v;
     }
}
}

x().setX(10);
console.log(x().getX());
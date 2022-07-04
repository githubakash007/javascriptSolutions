var foo = 'foo';
function bar() {
  setTimeout(() => {
    console.log(foo);  //foo
  }, 0);
  console.log(foo); // foo
 // console.log(bar()); // undefined
 // console.log(foo); // foo
  var foo = 'bar';
  function bar() {
    foo = 'bartwo';
  }
 // console.log(foo); // bar
}
bar();
console.log(foo); //bartwo 
// reference error, foo not defined
console.log(foo);

// hoisting primjer
console.log(foo); // undefined
var foo = 5;


// hoisting primjer #2
var sum = x + y;
var x = 4;
var y = 1;

console.log(sum); // NaN == undefined + undefined


// hoisting i funkcije #1
foo();

function foo(){
    console.log("foo");
}


// hoisting i funkcije #2
foo(); // foo is not a function (undefined)

var foo = function (){
    console.log("foo");
}

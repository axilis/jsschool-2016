// globalni prostor okupirat će varijable koje nisu definirane unutar funkcije
// window - browser
// global - nodejs
var foo = "hello";

console.log(foo); // hello
console.log(window.foo); // hello
console.log(this.foo); // hello
console.log(this === window); // true


// global scope primjer #1
var foo = "test";

function bar(){
    foo = "changed test";
}

bar();
console.log(foo); // changed test


// global scope primjer #2
function bar(){
    foo = "changed test";
}

bar();
console.log(foo); // changed test
// foo je kreiran unutar funkcije u globalnom prostoru
// 'use strict'

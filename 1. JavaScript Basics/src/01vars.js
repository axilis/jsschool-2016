// ključna riječ var - definiramo varijablu
// tip podatka se dinamički određuje, ovisno o izrazu na desnoj strani
var foo = 4;
console.log(foo); // 4


var foo = "test" + 'test';
console.log(foo); // test


var foo = "test";
foo = 4;
console.log(foo); // 4


// kad varijabla nije postavljena, JS postavlja njezinu vrijednost na "undefined"
var foo;
console.log(foo) // undefined


// kad izostavimo ključnu riječ var, JS će sam kreirati varijablu u globalnom prostoru.
// loša praksa
foo = 4;
console.log(foo); // 4


'use strict'
foo = 4;
console.log(foo); // greška


var foo = 4;
console.log(typeof foo); // number


var foo = 4.5;
console.log(typeof foo); // number


var foo = "string";
console.log(typeof foo); // string


var foo = true;
console.log(typeof foo); // boolean


// undefined je vrijednost, ali predstavlja i tip podatka u JS-u
var foo;
console.log(typeof foo); // undefined


// jedan od načina da se definira objekt
var foo = {
    bar: true,
    baz: "baz"
}

console.log(typeof foo); // object


// null predstavlja prazan objekt. dakle tipa object je.
var foo = null;
console.log(foo); // object


// nema fundamentalnog tipa podataka za polja
// polja su objekti
var array = [1,2,3, true, "test"];
console.log(typeof foo); // object


array.x = 100;
console.log(array.x); // 100 - ponaša se kao objekt


function printSomething(){
}
console.log(typeof printSomething); // function

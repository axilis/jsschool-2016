// kreiranje objekta #1
var foo = { };
foo.x = 100;
console.log(foo.x); // 100


// kreiranje objekta #2
var foo = {
    x : 100
}
console.log(foo.x); // 100
console.log(foo['x']); // 100   praktično



// konstruktor funkcija
var Student = function(name,jmbag){
    this.name = name;
    this.jmbag = jmbag;
}

var pero = new Student("pero", 1234);
var luka = new Student("luka", 1234);

console.log(typeof pero); // object
console.log(typeof Student); // function!

// problem - gdje efikasno s funkcijama? see prototypes


// object constructor function
console.log(typeof Object); // function.. constructor function, po konvenciji početno veliko slovo
var obj = new Object(); // == var obj = {};

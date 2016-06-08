// finalizacija
var Student = new function(name){
    this.name = name;
    this.speak = function(){
        console.log(this.name + " speak");
    };
}

var pero = new Student("pero");
var luka = new Student("luka");

console.log(pero === luka); // false
console.log(pero.__proto__ === luka.__proto__); // true
console.log(pero.__proto__ === Student.prototype); // true
console.log(Object.prototype === Student.prototype); // false - student je dobio svoj novi prazni prototip

console.log(pero.speak === luka.speak); // false - problem!!



// finalizacija #2
var Student = new function(name){
    this.name = name;
}

Student.prototype.speak = function(){
    console.log(this.name + " speak");
}


var pero = new Student("pero");
var luka = new Student("luka");

console.log(pero.speak === luka.speak); // true!! optimizacija

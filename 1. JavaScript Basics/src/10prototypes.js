var foo = {
    name: "name";
}

console.log(foo.bar()); // foo.bar is not a function
console.log(foo.toString()); // [object Object] (no error)
// toString lives on a prototype


console.log(typeof foo.prototype); // undefined - not available on JSON objects
console.log(typeof foo.__proto__); // object
console.log(typeof foo.__proto__ == Object.prototype); // true



var vehicle = {
    drive : function(){
        console.log("drive");
    }
}

// create new object car with vehicle as prototype
var car = Object.create(vehicle);
car.drive(); // drive

console.log(car.prototype); // undefined
console.log(car.__proto__ === Object.prototype); // false
console.log(car.__proto__ === vehicle.prototype); // true
console.log(car.__proto__.__proto__ === Object.prototype); // true


// finalizacija
var Student = new function(name){
    this.name = name;
}

Student.prototype.speak = function(){
    console.log("speak");
}



var pero = new Student("pero");

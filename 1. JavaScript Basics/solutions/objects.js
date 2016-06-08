function printObject(obj){
    console.log("{");
    for(prop in obj){
        console.log(prop + " : " + obj[prop]);
    }
    console.log("}");
}


var Person = function(firstname, lastname, birthdate){
    this.firstname =  firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
}

Person.prototype.getName = function(){
    return this.firstname + " " + this.lastname
}

Person.prototype.getAge = function(){
    return Math.floor((new Date() - this.birthdate)/(365 * 24 * 60 * 60 * 1000));
}

var pero = new Person("petar", "kovacevic", new Date(91, 9, 15));

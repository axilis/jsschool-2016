//1. There is no new type, class is just sytnax sugar for function
class Task {

}
console.log(typeof Task); //function

//2. 
class Task {

}

let task = new Task();
console.log(typeof task); //object

//3.
class Task {

}

let task = new Task();
console.log(task instanceof Task); //true

//4. 
class Task {
    showId() {
        console.log('99');
    }
}

let task = new Task();
task.showId(); //99


//5.
class Task {
    showId() {
        console.log('99');
    }
}

let task = new Task();
console.log(task.showId === Task.prototype.showId); //true


//6. constructor metoda
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

let task = new Task(); //constructing task


//7. Syntax
class Task {
    let taskId = 99; //syntax error
constructor(){
    console.log('constructing task');
},//syntax error
showId(){
    console.log('99');
}
}

let task = new Task();

//8. Class definition are not hoisted
let task = new Task();
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}
//TypeError: Task is not a constructor

//9.
let task = class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

new task(); //constructing task


//10. Difference between function and class
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

let task = {};

Task.call(task); // TypeError: Class constructor Task cannot be invoked without 'new'

//11. Difference between function and class
function Task() {

    console.log('constructing task');

}

let task = {};

Task.call(task); // constructing task


//12. Difference between function and class
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

let task = {};

Task.call(task); // TypeError: Class constructor Task cannot be invoked without 'new'

//13. Difference between function and class
class Task {
    constructor() {
        console.log('constructing task');
    }
    showId() {
        console.log('99');
    }
}

function Project() { };
console.log(window.Project == Project); //true
console.log(window.Task == Task); //false


//14.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject(); //constructing Project

//15.
class Project {
    constructor(name) {
        console.log('constructing Project: ' + name);
    }
}

class SoftwareProject extends Project {
}

let p = new SoftwareProject("ES6");//constructing Project: ES6

//16.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject();
//constructing Project
//constructing SoftwareProject

//17.
class Project {
    constructor() {
        console.log('constructing Project');
    }
}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject(); 
//constructing SoftwareProject
//ReferenceError: this is not defined

//18.
class Project {
}

class SoftwareProject extends Project {
    constructor() {
        console.log('constructing SoftwareProject');
    }
}

let p = new SoftwareProject(); 
//constructing SoftwareProject
//ReferenceError: this is not defined

//19.
class Project {
    getTaskCount(){
        return 50;
    }
}

class SoftwareProject extends Project {
    
}

let p = new SoftwareProject(); 
console.log(p.getTaskCount()); //50

//20.
class Project {
    getTaskCount(){
        return 50;
    }
}

class SoftwareProject extends Project {
    getTaskCount(){
       return 66; 
    }
}

let p = new SoftwareProject(); 
console.log(p.getTaskCount());//66

//21.
class Project {
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    getTaskCount() {
        return super.getTaskCount() + 6;
    }
}

let p = new SoftwareProject();
console.log(p.getTaskCount()); //56

//22.
class Project {
    constructor() {
        this.Location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProject();
console.log(p.Location); //Zg

//23.
class Project {
    constructor() {
        let location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProject();
console.log(p.location); //undefined

//24.
class Project {
    constructor() {
        this.location = 'Zg';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
        this.location = this.location + ' - Cro';
    }
}

let p = new SoftwareProject();
console.log(p.location);  //Zg - Cro

//25.
class Project {
    static getDefaultId(){
        return 0;
    }
}

console.log(Project.getDefaultId());  //0

//26.
class Project {
    static getDefaultId(){
        return 0;
    }
}

var p = new Project();

console.log(p.getDefaultId());  //TypeError: p.getDefaultId is not a function

//27.
class Project {
  
}
Project.id = 99;
var p = new Project();

console.log(Project.id); //99



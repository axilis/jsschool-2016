//1. es6 is allways in strict mode
//index.js
procjectId = 11;
console.log("Hello from module"); //Hello from module

//2.
//index.js
import {procjectId} from 'module.js'
console.log(procjectId); //11

//module.js
export let procjectId = 11;


//3.
//index.js
import {projectId, projectName} from 'module.js';
console.log(`${projectName} has id: ${projectId}`); //ES6 has id: 99

//module.js
export let projectId = 99;
export let projectName = "ES6"


//4.
//index.js
import {projectId as id, projectName} from 'module.js';
console.log(`${projectName} has id: ${id}`); //ES6 has id: 99

//module.js
export let projectId = 99;
export let projectName = "ES6"

//5.
//index.js
import {projectId as id, projectName} from 'module.js';
console.log(`${projectName} has id: ${projectId}`); //ReferenceError: projectId is not defined

//module.js
export let projectId = 99;
export let projectName = "ES6"

//6.
//index.js
console.log('starting in base');
import {projectId} from 'module.js';
console.log('ending in base');


//module.js
export let projectId = 99;
console.log('in module1');

//in module1
//starting in base
//ending in base


//7. no curly braces
//index.js
import someValue from 'module.js';
console.log(someValue); //ES6


//module.js
export let projectId = 99;
let projectName = 'ES6';
export default projectName;


//7. multiple imports
//index.js
import {default as projectName, procjectId} from 'module.js';
console.log(projectName); //ES6


//module.js
export let projectId = 99;
let projectName = 'ES6';
export default projectName;


//8.
//index.js
import someValue from 'module.js';
console.log(someValue); //undefined


//module.js
let projectId = 99;
let projectName = 'ES6';
export {projectId, projectName};


//9.
//index.js
import someValue from 'module.js';
console.log(someValue); //99


//module.js
let projectId = 99;
let projectName = 'ES6';
export {projectId as default, projectName};


//10.
//index.js
import * as values from 'module.js';
console.log(values); //{projectId:99 , projectName:'ES6'}


//module.js
let projectId = 99;
let projectName = 'ES6';
export {projectId, projectName};


//11.
//index.js
import {projectId}  from 'module.js';
projectId = 8000; //projectId is read-only
console.log(projectId);

//module.js
export let projectId = 99;


//12.
//index.js
import {project, showProject}  from 'module.js';
project.projectId = 8000;
showProject(); //8000
console.log(project.projectId);//8000


//module.js
export let project = { projectId: 99 };
export function showProject(){
    console.log(project.projectId);
}


//13.
//index.js
import {showProject, updateProject}  from 'module.js';
showProject();
updateProject();
showProject();


//module.js
export function showProject() {
    console.log('in original');
}
export function updateProject() {
    showProject = function () {
        console.log('in updated');
    }
}






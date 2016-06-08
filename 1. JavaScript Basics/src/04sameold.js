var i = 0;
while(true){
    if(i++ >= 100){
        break;
    }

    console.log(i);
}


for(var j= 0; j < 100; j++){
    if(j % 2 == 0){
        continue;
    } else{
        console.log(j);
    }
}


// false == undefined, null, "", 0, false
// true == everything else
var x = 100;
if(x == 10){
    console.log("x == 10");
} else if(x > 200){
    console.log("x > 200");
} else{
    console.log("else");
}


if("" || undefined || null || 0 || false){
    // does not execute
}

if(1 && "test" && true){
    // does execute
}


if(1 == "1"){
    // executes
}

if(1 === "1"){
    // does not execute
}

if(null == undefined){
    // executes
}

if(null === undefined){
    // does not execute
}




grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}

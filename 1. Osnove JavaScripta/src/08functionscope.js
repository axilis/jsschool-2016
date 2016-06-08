var foo = "global foo";

function bar(){
    var foo = "function foo";
}

bar();
console.log(foo); // global foo


var foo = "global foo";
function bar(){
    var foo = "function foo";
    var innerBar = function(){
        var foo = "inner function foo";
        console.log(foo); // inner function foo
    }

    innerBar();
}

bar();

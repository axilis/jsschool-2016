// primitivni tipovi
function increment(foo){
    foo++;
}

var foo = 5;
increment(foo);

// referentni tipovi
var foo = {
    value : "foo"
}

var baz = foo;
baz.value = "changed";
console.log(foo.value); // changed
console.log(baz.value); // changed


// referentni tipovi - polja
var foo = [1,2,3];
var foo2 = foo;

foo2[0] = 4;
console.log(foo[0]); // 4

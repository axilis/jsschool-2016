var foo = [];
foo.push(1);
foo.push(2,3,4);
console.log(foo.toString()); // 1,2,3,4

// pop - miče zadnji član iz polja
var foo = [1,2,3,4];
var bar = foo.pop();
console.log(foo.toString()); // 1,2,3
console.log(bar); // 4

// shift - miče prvog člana iz polja
var foo = [1,2,3,4];
bar = foo.shift();
console.log(foo.toString()); // 2,3,4
console.log(bar); // 1

// unshift - stavlja prvi član u polje
var foo = [1,2,3,4];
foo.unshift(0);
console.log(foo.toString()); // 0,1,2,3,4

// splice
var foo = [1,2,3,4];
foo.splice(1,2);
console.log(foo.toString()); // 1,4  (pocinjemo s prvim indeksom i brisemo dvije vrijednosti)

var foo = [1,2,3,4];
foo.splice(0,1);
console.log(foo.toString()); // 2,3,4  (pocinjemo s nultim indeksom i brisemo jednu vrijednost)

var foo = [1,2,3,4];
foo.splice(2,0,100);
console.log(foo.toString()); // 1,2,100,3,4  (pocinjemo s drugim indeksom i brisemo 0 vrijednosti i dodajemo 100)

var foo = [1,2,3,4];
foo.splice(2,0,100,101,102);
console.log(foo.toString()); // 1,2,100,101,102,3,4  (pocinjemo s drugim indeksom i brisemo 0 vrijednosti i dodajemo vrijednosti)

var foo = [1,2,3,4];
foo.splice(2,1,100);
console.log(foo.toString()); // 1,2,100,4  (pocinjemo s drugim indeksom i brisemo 1 vrijednost i dodajemo 100) - efektivno replace



var foo = [1,2,3,4];
foo.sort(function(v1,v2){
    return v1 - v2;
});


// stavlja novu listu na kraj originalne liste
var foo = [1,2,3];
foo = foo.concat([4,5,6]);
console.log(foo.toString()); // 1,2,3,4,5,6



// For each
var array = [10, 100, 1000, true];

for(var index in array){
    console.log(array[index]);
}

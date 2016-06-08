//1. 
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories instanceof Array); //true
        };
        showCategories(123, 'search', 'advertising');
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories); //["search", "advertising"]
        };
        showCategories(123, 'search', 'advertising');
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            console.log(categories); //[]
        };
        showCategories(123);
    })();
} catch (error) {
    console.log(error);
}

//4.
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
            
        };
        console.log(showCategories.length); //1
    })();
} catch (error) {
    console.log(error);
}

//5. 
try {
    (function () {
        "use script";
        let showCategories = function(productId, ...categories){
             console.log(arguments.length); //3
        };
       showCategories(123, 'search', 'advertising');
    })();
} catch (error) {
    console.log(error);
}

//6. Math max function receives as many parameters as you want
try {
    (function () {
        "use script";
       let prices = [12, 20, 18];
       let maxPrice = Math.max(...prices);
       console.log(maxPrice); //20
    })();
} catch (error) {
    console.log(error);
}

//7.
try {
    (function () {
        "use script";
       let prices = [12, 20, 18];
       let newPrices = [...prices];
       console.log(newPrices); //[12, 20, 18]
    })();
} catch (error) {
    console.log(error);
}

//8. trailing comma, javascript doesn't expect element after last comma
try {
    (function () {
        "use script";
       let prices = [12, 20, 18];
       let newPrices = [...[,,]];
       console.log(newPrices); //[undefined, undefined]
    })();
} catch (error) {
    console.log(error);
}

//9. spread operator breaks string into characthers 
try {
    (function () {
        "use script";
        let maxCode = Math.max(..."43210"); 
        console.log(maxCode); //4
    })();
} catch (error) {
    console.log(error);
}

//10.

try {
    (function () {
        "use script";
        let codeArray = ['A', ..."BCD", 'E'];
        console.log(codeArray); //["A", "B", "C", "D", "E"]
    })();
} catch (error) {
    console.log(error);
}




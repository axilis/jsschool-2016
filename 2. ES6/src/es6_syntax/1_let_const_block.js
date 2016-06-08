//1. In ES5 variables get hoisted
try {
    (function () {
        "use script";
        console.log(productId); //undefined
        var productId = 12;
    })();
} catch (error) {
    console.log(error);
}

//2. No hoisting with let
try {
    (function () {
        "use script";
        console.log(productId); //Reference error
        let productId = 12;
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        let productId = 12;
        console.log(productId); //12
    })();
} catch (error) {
    console.log(error);
}

//4. Same as var, let sets variable to undefined if no value is defined 
try {
    (function () {
        "use script";
        let productId;
        console.log(productId); //undefined
    })();
} catch (error) {
    console.log(error);
}


//5. variables defined with let have block scope, instead function scope
try {
    (function () {
        "use script";
        let productId = 12;
        {
            let productId = 1000;
        }
        console.log(productId); //12
    })();
} catch (error) {
    console.log(error);
}

//6. Block scoping
try {
    (function () {
        "use script";
        {
            let productId = 1000;
        }
        console.log(productId); //Reference error
    })();
} catch (error) {
    console.log(error);
}


//7. Compiler runs accross it, but it is called later
try {
    (function () {
        "use script";
        function updateProductId() {
            let productId = 1000;
        }
        let productId = null;
        updateProductId();
        console.log(productId); //null
    })();
} catch (error) {
    console.log(error);
}

//8. productId is scoped to for loop
try {
    (function () {
        "use script";
        let productId = 42;
        for (let productId = 0; productId < 10; productId++) {
        }
        console.log(productId); //42
    })();
} catch (error) {
    console.log(error);
}

//9. i is scoped to function, so closure is formed over i and 
//   at the end of the loop i is set to 11
try {
    (function () {
        "use script";
        let updateFunctions = [];
        for (var i = 0; i <= 10; i++) {
            updateFunctions.push(function () { return i; });
        }
        console.log(updateFunctions[0]()); //11
    })();
} catch (error) {
    console.log(error);
}

//10. const is syntax which allows us to define constants, uppercase is optional
try {
    (function () {
        "use script";
        const LICENCE_KEY = 1234;
        console.log(LICENCE_KEY); //1234
    })();
} catch (error) {
    console.log(error);
}

//12. Const needs to intialized
try {
    (function () {
        "use script";
        const LICENCE_KEY; //Syntax error
        console.log(LICENCE_KEY);
    })();
} catch (error) {
    console.log(error);
}


//13. 
try {
    (function () {
        "use script";
        const LICENCE_KEY = 1234;
        LICENCE_KEY = 20; //TypeError, assigment to constant variable
        console.log(LICENCE_KEY);
    })();
} catch (error) {
    console.log(error);
}

//14. block scope
try {
    (function () {
        "use script";
        const LICENCE_KEY = 1234;
        if (LICENCE_KEY > 10) {
            const LICENCE_KEY = 2000;
        }
        console.log(LICENCE_KEY); //1234
    })();
} catch (error) {
    console.log(error);
}


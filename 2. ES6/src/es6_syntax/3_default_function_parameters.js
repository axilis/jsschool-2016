//1.
try {
    (function () {
        "use script";
        var getProductId = function (productId = 1000) {
            console.log(productId);
        };
        getProductId(); //1000
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        var getProductId = function (productId = 1000, type = "software") {
            console.log(productId + ", " + type);
        };
        getProductId(undefined, "hardware"); //1000, hardware
    })();
} catch (error) {
    console.log(error);
}

//3. 
try {
    (function () {
        "use script";
        var getTotal = function (price, tax = price * 0.25) {
            console.log(price + tax);
        };
        getTotal(100); //125
    })();
} catch (error) {
    console.log(error);
}

//4.
try {
    (function () {
        "use script";
        let pdv = 0.25;
        var getTotal = function (price, tax = price * pdv) {
            console.log(price + tax);
        };
        getTotal(100); //125
    })();
} catch (error) {
    console.log(error);
}

//5.
try {
    (function () {
        "use script";
        let pdv = () => 0.25;
        var getTotal = function (price, tax = price * pdv()) {
            console.log(price + tax);
        };
        getTotal(100); //125
    })();
} catch (error) {
    console.log(error);
}

//6.
try {
    (function () {
        "use script";
        var getTotal = function (price, tax = 0.25) {
            console.log(arguments.length);
        };
        getTotal(100); //1
    })();
} catch (error) {
    console.log(error);
}
//7.
try {
    (function () {
        "use script";
        
        var getTotal = function (price = adjustment, adjustment = 1) {
            console.log(price + adjustment);
        };
        getTotal(); //ReferenceError: adjustment is not defined
    })();
} catch (error) {
    console.log(error);
}


//8.
try {
    (function () {
        "use script";
        
        var getTotal = function (price = adjustment, adjustment = 1) {
            console.log(price + adjustment);
        };
        getTotal(100); //101
    })();
} catch (error) {
    console.log(error);
}
//1. new syntax, fat arrow symbol(maps to, goes to)
try {
    (function () {
        "use script";
        var getPrice = () => 600;
        console.log(typeof getPrice); //function
    })();
} catch (error) {
    console.log(error);
}

//2. 
try {
    (function () {
        "use script";
        var getPrice = () => 600;
        console.log(getPrice()); //600
    })();
} catch (error) {
    console.log(error);
}

//3. when there is just one parameter you can omit parenthesis 
try {
    (function () {
        "use script";
        var getPrice = count => count * 20;
        console.log(getPrice(20)); //40
    })();
} catch (error) {
    console.log(error);
}


//4. 
try {
    (function () {
        "use script";
        var getPrice = (count, tax) => count * 20 * (1 + tax);
        console.log(getPrice(20, 0.25)); //500
    })();
} catch (error) {
    console.log(error);
}


//4. using a block
try {
    (function () {
        "use script";
        var getPrice = (count, tax) => {
            let price = count * 20;
            price *= (1 + tax);
            return price;
        }
        console.log(getPrice(20, 0.25)); //500
    })();
} catch (error) {
    console.log(error);
}

//5. this refers to object that invokes function
try {
    (function () {
        "use script";
        document.addEventListener('click', function () {
            console.log(this);//#document (in chrome)
        });
    })();
} catch (error) {
    console.log(error);
}


//5. lexical this
try {
    (function () {
        "use script";
        document.addEventListener('click', () => console.log(this)); //Window 
    })();
} catch (error) {
    console.log(error);
}


//6. 
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                console.log(this);
            }
        };
        customObject.process(); //Object {number: 123}
    })();
} catch (error) {
    console.log(error);
}

//7.
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: () => console.log(this)
        };
        customObject.process(); //Window
    })();
} catch (error) {
    console.log(error);
}

//8.
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                console.log(this.number);
            }
        };
        customObject.process(); //123
    })();
} catch (error) {
    console.log(error);
}

//9.
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                console.log(this.number);
            }
        };

        var secondCustomObject = {
            number: 324
        };

        customObject.process.bind(secondCustomObject)(); //324
    })();
} catch (error) {
    console.log(error);
}


//10. Window is assigned to this
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: () => console.log(this.number)
        };

        var secondCustomObject = {
            number: 324
        };

        customObject.process.bind(secondCustomObject)(); //undefined
    })();
} catch (error) {
    console.log(error);
}

//11. 
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                return function () { console.log(this.number); }
            }
        };

        var secondCustomObject = {
            number: 324
        };

        customObject.process().bind(secondCustomObject)(); //324
    })();
} catch (error) {
    console.log(error);
}

//12. 
try {
    (function () {
        "use script";
        var customObject = {
            number: 123,
            process: function () {
                return () => console.log(this.number);
            }
        };

        var secondCustomObject = {
            number: 324
        };

        customObject.process().bind(secondCustomObject)(); //123
    })();
} catch (error) {
    console.log(error);
}


//13. fat arrow symbol syntax forbids new line
try {
    (function () {
        "use script";
        let getPrice = ()
            => 500; //SyntaxError
        console.log(typeof getPrice);
    })();
} catch (error) {
    console.log(error);
}

//14. 
try {
    (function () {
        "use script";
        let getPrice = () => 500;
        console.log(getPriceFunc.hasOwnProperty("prototype")); //false
    })();
} catch (error) {
    console.log(error);
}


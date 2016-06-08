//1. syntax sugar
try {
    (function () {
        "use script";
        let price = 6.00, quantity = 30;
        var productView = {
            price,
            quantity
        }
        console.log(productView); //Object {price: 6, quantity: 30}
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        let price = 6.00, quantity = 30;
        var productView = {
            price,
            quantity,
            calculateValue() {
                return this.price * this.quantity
            }
        }
        console.log(productView.calculateValue()); //180
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        let price = 6.00, quantity = 30;
        let productView = {
            price: 13,
            quantity: 13,
            calculateValue() {
                return this.price * this.quantity
            }
        }
        console.log(productView.calculateValue()); //169
    })();
} catch (error) {
    console.log(error);
}

//4. Should act as calculateValueArrow, 
//   but in chrome acts as calculateValueFunc
try {
    (function () {
        "use script";
        var price = 6.00, quantity = 30;
        var productView = {
            price: 13,
            quantity: 13,
            calculateValue() {
                console.log(this); //window
                return this.price * this.quantity
            },
            calculateValueArrow: () => {
                console.log(this);
                return this.price * this.quantity
            },
            calculateValueFunc: function () {
                console.log(this);
                return this.price * this.quantity
            }
        }
        console.log(productView.calculateValue()); //169
    })();
} catch (error) {
    console.log(error);
}

//5.
try {
    (function () {
        "use script";
        var price = 6.00, quantity = 30;
        var productView = {
            price,
            quantity,
            "calculate Value"() {
                return this.price * this.quantity
            }
        }
        console.log(productView["calculate Value"]()); //180
    })();
} catch (error) {
    console.log(error);
}

//6.
try {
    (function () {
        "use script";
        var field = "dynamicField"
        var price = 6.00;
        var productView = {
            [field]: price
        }
        console.log(productView); //Object {dynamicField: 6}
    })();
} catch (error) {
    console.log(error);
}

//7.
try {
    (function () {
        "use script";
        var field = "dynamicField"
        var price = 6.00;
        var productView = {
            [field + "-007"]: price
        }
        console.log(productView); //Object {dynamicField-007: 6}
    })();
} catch (error) {
    console.log(error);
}

//8.
try {
    (function () {
        "use script";
        var method = "doIt"
        var price = 6.00;
        var productView = {
            [method + "-007"](){
                console.log("in a method");
            }
        }
        productView["doIt-007"](); //in a method
    })();
} catch (error) {
    console.log(error);
}

//9. 

try {
    (function () {
        "use script";
        var ident = "productId";
        var productView = {
            get[ident](){
                return true;
            },
            set[ident](value){}
        }
        console.log(productView.productId); //true
    })();
} catch (error) {
    console.log(error);
}



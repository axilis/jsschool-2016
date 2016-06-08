//1.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('resolving...');
            resolve();
        }, 2000);
    });
}

let promise = doAsync();
//in promise code
//resolving...

//2.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject();
        }, 2000);
    });
}
let promise = doAsync();
//in promise code
//rejecting...

//3.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject();
        }, 2000);
    });
}
doAsync().then(function () {
    console.log("Fulfilled");
}, function () {
    console.log("Rejected");
});

//in promise code
//rejecting...
//Rejected

//4.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('resolving...');
            resolve();
        }, 2000);
    });
}

let promise = doAsync()

setTimeout(function () {
    console.log('attaching to promise');
    promise.then(function () {
        console.log("Fulfilled");
    }, function () {
        console.log("Rejected");
    });
}, 5000);
//in promise code
//resolving...
//attaching to promise
//Fulfilled


//5.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject("database error");
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Fulfilled: " + value);
}, function (reason) {
    console.log("Rejected: " + reason);
});

//in promise code
//rejecting...
//Rejected: database error

//6.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('resolving...');
            reject("OK");
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Fulfilled: " + value);
    return "For sure";
}).then(function (value) {
    console.log("Really " + value);
});

//in promise code
//resolving...
//Fulfilled: OK
//Really For sure

//7.
function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject("Nope");
        }, 2000);
    });
}
doAsync().catch(function (reason) {
    console.log("Error: " + reason);
});
//in promise code
//rejecting...
//Error: Nope

//8.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            resolve("Ok");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {

            resolve(doAnotherAsync());
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//in promise code
//in another promise code
//Success: Ok

//9.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            reject("Nope");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {

            resolve(doAnotherAsync());
        }, 2000);
    });
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//in promise code
//in another promise code
//Error: Nope

//10.
function doAsync() {
    return Promise.resolve("Cached");
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//Success: Cached


//11.
function doAsync() {
    return Promise.reject("Some error");
}
doAsync().then(function (value) {
    console.log("Success: " + value);
}, function (reason) {
    console.log("Error: " + reason);
});

//Error: Some error

//12.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            resolve("OK 1");
        }, 1500);
    });
}


Promise.all([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("Nope");
});


//in another promise code
//in promise code
//OK

//13.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            reject("Nope 1");
        }, 1500);
    });
}


Promise.all([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("Nope");
});


//in another promise code
//in promise code
//Nope

//13.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            resolve("OK 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            reject("Nope 1");
        }, 1500);
    });
}


Promise.race([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("Nope");
});


//in another promise code
//in promise code
//OK


//14.
function doAnotherAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in another promise code');
        setTimeout(function () {
            reject("Nope 2");
        }, 1000);
    });
}

function doAsync() {
    return new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            resolve("OK 1");
        }, 1500);
    });
}


Promise.race([doAnotherAsync(), doAsync()]).then(function (valuse) {
    console.log("OK");
}, function (reason) {
    console.log("Nope");
});


//in another promise code
//in promise code
//Nope
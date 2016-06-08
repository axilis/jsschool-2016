//1.
try {
    (function () {
        "use script";
        var categories = ["hardware", "software", "vmware"];
        for(var item of categories){
            console.log(item); //"hardware" //"software" //"vmware"
        }
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        var categories = [, ,];
        for(var item of categories){
            console.log(item); //undefined //undefined
        }
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        var codes = "ABCDF";
        var count = 0;
        for (var code of codes) {
            count++;
        }
        console.log(count); //5
    })();
} catch (error) {
    console.log(error);
}

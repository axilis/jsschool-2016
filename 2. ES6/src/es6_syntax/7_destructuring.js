//1.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', '75000'];
        let [low, average, high] = salary;
        console.log(average); //50000
    })();
} catch (error) {
    console.log(error);
}

//2.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000'];
        let [low, average, high] = salary;
        console.log(high); //undefined
    })();
} catch (error) {
    console.log(error);
}

//3.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', '75000'];
        let [low, , high] = salary;
        console.log(high); //75000
    })();
} catch (error) {
    console.log(error);
}

//4.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', '75000'];
        let [low, ...remaining] = salary;
        console.log(remaining); //["50000", "75000"]
    })();
} catch (error) {
    console.log(error);
}

//5.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000'];
        let [low, average, high = '88000'] = salary;
        console.log(high); //8800
    })();
} catch (error) {
    console.log(error);
}

//6. Nested destructuring
try {
    (function () {
        "use script";
        let salary = ['32000', '50000', ['8800', '9900']];
        let [low, average, [actualLow, actualHigh]] = salary;
        console.log(actualLow); //8800
    })();
} catch (error) {
    console.log(error);
}

//7.
try {
    (function () {
        "use script";
        let salary = ['32000', '50000'];
        let low, average, high;
        [low, average, high = '8800'] = salary;
        console.log(high); //8800
    })();
} catch (error) {
    console.log(error);
}
//8.
try {
    (function () {
        "use script";
        function reviewSalary([low, average], high = '8800') {
            console.log(average);
        }
        reviewSalary(['32000', '50000']); //5000
    })();
} catch (error) {
    console.log(error);
}

//9.
try {
    (function () {
        "use script";
        let salary = {
            low: '32000',
            average: '50000',
            high: '75000'
        };
        let {low, average, high} = salary;
        console.log(high); //75000
    })();
} catch (error) {
    console.log(error);
}

//10.
try {
    (function () {
        "use script";
        let salary = {
            low: '32000',
            average: '50000',
            high: '75000'
        };
        let {low: newLow, average: newAverage, high: newHigh} = salary;
        console.log(newHigh);
    })();
} catch (error) {
    console.log(error);
}

//11.

try {
    (function () {
        "use script";
        let salary = {
            low: '32000',
            average: '50000',
            high: '75000'
        };
        let newLow, newAverage, newHigh;
        ({ low: newLow, average: newAverage, high: newHigh } = salary);
        console.log(newLow); //32000
    })();
} catch (error) {
    console.log(error);
}


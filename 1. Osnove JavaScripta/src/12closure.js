function generator() {
  var name = "Pero";
  function logName() {
    console.log(name);
  }
  return logName;
}

var myFunc = generator();
myFunc(); // Pero



function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

var mult10 = createMultiplier(10);
var mult100 = createMultiplier(100);

console.log(mult10(2));  // 20
console.log(mult100(2)); // 200

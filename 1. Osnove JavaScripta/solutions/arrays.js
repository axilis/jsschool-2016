function cloneArray(array){
    if(array instanceof Array){
        var newArray = [];
        for(i in array){
            newArray.push(array[i]);
        }
        return newArray;
    } else{
        throw("Not an instance of array");
    }
}

function sortArray(array, cmp){
    var clonedArray = cloneArray(array);
    for(var i = 0; i < clonedArray.length; i++){
        for(var j=0; j< clonedArray.length - 1; j++){
            if(cmp(clonedArray[j], clonedArray[j + 1]) > 0){
                var temp = clonedArray[j + 1];
                clonedArray[j + 1] = clonedArray[j];
                clonedArray[j] = temp;
            }
        }
    }
    return clonedArray;
}

function removeSmallest(array){
    var minValue;
    var minIndex
    for(var i in array){
        if(minValue === undefined){
            minValue = array[i];
            minIndex = i;
        }
        else if(array[i] < minValue){
            minValue = array[i];
            minIndex = i;
        }
    }

    array.splice(minIndex, 1);
}


var array = [6,256,7,24,72];
var result = sortArray(array, function(v1, v2){ return v2 - v1;})
removeSmallest(array);
console.log(array);
console.log(result);

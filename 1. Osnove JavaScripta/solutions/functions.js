function numReverse(x){
    return parseInt((x + "").split('').reverse().join(''));
}


function fact(x){
    if(x < 0){
        return NaN;
    }
    if(x == 0){
        return 1;
    }
    return x * fact(x-1);
}

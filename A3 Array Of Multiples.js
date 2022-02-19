//multiples array

function arrayOfMultiples(num, length){
    var arr = [];
    for(let i = 0; i < length; i++){
        arr.push(num * (i + 1));
    }
    return arr;
}
// Add your functions here

function map(array, fn) {
    const array1 = [];
    array.forEach( element => array1.push(fn(element)));
    return array1;
}


function reduce(sourceArray, fn, startingPoint) {
    let accumulator;
    let i;
    if (startingPoint != null) {
         accumulator = startingPoint;
         i = 0;
    }
    else {
         accumulator = sourceArray[0];
         i = 1;
         
    }

 for (; i < sourceArray.length; i++) {
    accumulator = fn(sourceArray[i], accumulator);
    
    
 }
 return accumulator   

}


function fibonacci() {
    var first = 0;
    var second = 1;
    
    return function sum() {
        [ first , second ] = [ second, first + second];
        return first;
    };
}

var FIB = fibonacci();


for (let j = 0; j <7 ; j++) {
    console.log(FIB());
}
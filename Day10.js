//                        1st  task
var arr = [-5 ,-4, -3 , -2 , -1 , 0 , 1, 2 , 3 , 4 , 5 ];

Array.prototype.min = function() {
    var min = this[0];
    this.filter((ele)=>
    {
        if(ele <min){
            return min = ele;
        }
    })
    return min;
};
console.log(arr.min()) ;

//                        2nd  task

Array.prototype.customFilter = function (call_back) {
    let pen = [];
    this.forEach(element => {
        if (call_back(element)) {
            pen.push(element);
        }
    })
    return pen;
}
console.log(arr.customFilter((ele) => ele > 5)) ;

//                        3rd  task

Array.prototype.customFill = function (Value, start , end ) {
    let potato = [];
    for (let i = 0 ; i < this.length; i++) {
        if( i >= start && i<= end){
            potato.push(Value);
        }
        else {
            potato.push(this[i]);
        }
    } 
    return potato;
}
console.log(arr.customFill(55, 33,99, 77,88)) ;

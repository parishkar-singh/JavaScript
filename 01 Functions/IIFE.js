// IIFE
// (funtion(){})();

(function square(){
    console.log('IIFE');
})();

// Question Closure and IIFE finds x in the local scope and then the parent scope x is found in the parent scope so that means 1 will be printed

(function (x){
    return (function(y){
        console.log(x);
    })(2)
})(1);

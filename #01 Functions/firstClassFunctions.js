// What are first class functions
// Functions are first class citizens in JS
// Functions can be assigned to variables, passed as arguments to other functions, returned from other functions
// if the function is passed as a variable to another function then its called the first class function


const square = function (x) {
    return x * x;
}
function displaySquare(fn){
    console.log(fn(5));
}
displaySquare(square);

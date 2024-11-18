// function foo(){
//     var x = 1; // here var is given
// }
// foo();
// console.log(x); // so this will through an error
"use strict" // as we used strict here now  the code will through the error
function foo(){
    x = 1; // here var is not defined then x becomes the global scope and will print if called outside functio
}
foo();
console.log(x); // this will print 1 as the value of x is  1

//for not getting these type of mistakes and make the scope to the given function only we can use "use Strict" at the begining of the file or if we want to strict only one function then we can give this "use Strict" at the first line of function.
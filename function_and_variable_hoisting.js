console.log(y);
//console.log(x);
let x; // cannot access let declared variable before initialization and it will through an error.
var y; // we can access var declared variable before initialization as it goes to the top of the scope

var z = "hii";
function foo(){
    console.log(z); // this will remain undefined as var z is initialized after the declaration
     var z = "bye";// hoisting isnt happen in function it only hoists in the global scope variables 
     // if there is no var z in the local scope of the declared function then it will look into the global scope and will print the result "hii"
}
foo();


//function hoisting
function myFunc(){
    console.log("function 1 called");
}
myFunc();

//if we call the function first and declare function later
myFunc2(); // this will also give the output of the function as all the function are hoisted to the top scope
function myFunc2(){
    console.log("function 2 is called");
}

//functions declared with the functinal expression cant hoist to top
let myFunc3 = function(){
    console.log("function 3 called");
}
myFunc3();

//if we call myfunc3 before the declaration then it will throw an error!
myFunc4();// cannot functional expressions before its declaration.
let myFunc4 = function (){
    console.log("function 4 called");
}
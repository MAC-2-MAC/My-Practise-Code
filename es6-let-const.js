//using var variable which has a global scope we can first call the variable and can decalre it later
console.log(x); // this creates a variable x which is undefined 
var x = 1;
console.log(x);// after assigning the value it shows the result
 x = 2; // variables declares without variable name comes under var and it has global scope
 console.log(x); 

//--------------------------------

//console.log(y); // here we cant call y which is not initialized at. first we have to initialize the let variable and after that we have to call x or else it will through an error, like in var it wont create a variable with undefined value
let y = 19;
console.log(y); // this will print y as it is called after the declaration
//let y = 20; // let wont allow us to redecalre the variable like in var once let variable is decalred then it cant redecalare the same variable in its scope either in global scope or local scope, it will throw an error 
y = 40; // we can change the value of let decalred variables cant redeclare it
console.log("now value is:", y);

//-------------------------------------
//console.log(z); // we can't even call the const variable before its declaration
//const z; // we cant decalare const variable, at the time of creation we also have to declare the value to it or else it will throw an error\
const z = 30;
console.log(z); // this will give the output as the const is declared and assigned the value also
//z = 50; // we cant reassign the value to a const decalred variable it will through error
//console.log(z);

const obj = {
    a : 40
}
console.log(obj);
obj.a = 70; // here we can change the obj values in the const declared variable 
console.log(obj); // this will modify the const decalred obj value a, we cant reassign the value to obj as const keyword is used to declare it


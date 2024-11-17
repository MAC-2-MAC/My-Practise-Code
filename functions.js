// normal function without parameters used
function myAddition1(){
    let a = 20;
    let b = 40;
    console.log(a+b);
}
myAddition1();

//function with parameters
function myAddition2(a,b){
    console.log(a*b);
}
myAddition2(10,20);

//assinging function to variable
function myAddition3(a,b){
    return a-b;
}
const sub = myAddition3(40,20);
console.log(sub);

//finding the no.of vowels in a string 
function no_of_vowels (str){ //declared a function with parameter str
    const String = str.toLowerCase(); //converting the entered text into lowercase for checking in if loop
    let count = 0; //count is set to zero
    for(let i = 0; i <str.length; i++){ // using for loop for iteration over the string
        if(
            str[i] == "a" ||
            str[i] == "e" ||
            str[i] == "i" ||
            str[i] == "o" ||
            str[i] == "u"
        )
        count ++; // if vowel matches then the count will increase
    }
    return count; // returns the count of the vowels in the word
}

let vowelsCheck = no_of_vowels("hello Mehdi"); // we passed a string in the parameters
if(vowelsCheck == 0) console.log("NO vowels found"); //if no vowels found in the string returns 0
else console.log("NO of vowels are:",vowelsCheck); // if vowels found returns the no of vowels found


//function expression without name
const variable_name = function (a,b){
    console.log(a+b);
}
variable_name(10,20); //using the variable name as the function name as the function is assigned to a variable

//function expression withname
const variable_name2 = function myFunction(a,b){
    return a*b;
}
//myFunction(10,30); here this myFunction calling will give an error as we assigned that to a variable
variable_name2(10,40);

//name property of a variable without function name
let sum = function() {};
let nextSum = sum;
console.log(sum.name); //returns variable name
console.log(nextSum.name); //returns variable name
console.log(sum === nextSum);

//name property of a variable with the function name
let sum2 = function myFunction2(){ };
let nextSum2 = sum2;
console.log(sum2.name); // returns the function name
console.log(nextSum2.name); //returns function name
console.log(sum2 ===nextSum2);

//finding the factorial using the function calling with the function
const factorial = function fact(n){
    if(n<=1){
      return 1;
    }
    return n * fact(n-1); //5*4*3*2*1 = 120
}
console.log(factorial(5));

console.log("==========Arrow functions==========");

let age = () => console.log("my age is 24"); // single line code doesn't need braces
age();

let age2 = (a)=> console.log("my compnay name is:",a);
age2(24);// using parameter a 

let age3 = (a,b) => console.log("my age will be either:",a,"or:",b);
age3(24,25);

//using multiple lines of code

let maths = (a,b,c)=> {
    console.log(a+b+c);
    console.log(a*b*c);
    console.log(a-b-c);
}
maths(3,2,1);

//using default parameter

let age4 = (a,b=25)=> console.log("my age will be either:",a,"or",b);
age4(24); // we passed single parameter only but it shows two because we gave default paremter

//IIFE FUNCTIONS
(function(x,y){
    console.log(x+y);
})(10,30); // this will have two braces in the first brace we define the function and in the second brace we assign the values

function myFunc(){
    console.log("welcome to");
    (function(){
        console.log("GREAT LEARNING");
    })(); //IIFE FUNCTION INSDIE THE NORMAL FUNCTION
    console.log("How are you mehdi ?");
}
myFunc();

//ANONYMOUS FUNCTIONS
let names = function (){
    console.log("Mehdi Ameen Chittiwala");
}
names();

function myCourse(welcome){
    console.log(welcome(),"great Learning !!!");
}
myCourse( function(){
    return "welcome to";
}
)
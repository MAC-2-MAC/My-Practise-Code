function foo(x,y){
    if(typeof x === 'number' && typeof y === 'number'){ // checking whether the entering values are numbers only if not they will throw an error message
        return x+y;
    }
    throw new Error("the value entered are not numbers please enter in numbers only"); // throw message to be printed,  if we use new Error then the error will be an object to print the message only we use error.message in the catch block
}
try{
    console.log(foo(20,30));// this will result in 50
    console.log(foo(23,"hello")); // this will throw the error message
}
catch(error){
    console.log(error.message);// this will print the error message only not the error object
}

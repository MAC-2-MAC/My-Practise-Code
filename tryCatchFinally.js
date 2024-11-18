try{
    // function foo(){
    //     console.log("foo is defined");
    // }  
     foo(); // this try block is used to move to next line of execution if any line in the try block has errors it will pass the execution to the next line where catch block will return the message of error
}catch(error){
    console.log(error.message); //error.message is inbuilt property of javascript to detail the error in form of a string
}finally{
    console.log("this message will get logs irrespective of what the result is")// this finally block will print definately any how whether it gets error or not
}
console.log("printing this after foo(); called which is an error if we dont use try and catch ");
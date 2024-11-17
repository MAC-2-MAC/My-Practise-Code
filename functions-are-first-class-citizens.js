function foo( callback,hellback ){ // callback is just a name
    var x = 20; y = 30;
    var z = x+y;
    callback(); // callback is just a name we can give any name in place of callback to return bar function
    hellback();// i added on my own for testing purpose

    function retFn(){
        console.log("retFn is called");
    }
    retFn();
}
foo(bar,car);

function bar(){
    console.log('bar is called');
}
function car(){
    console.log("car is called");
}

// so in final functions are called as first class citizens becaue we can call the functions in expression paraemters and can assignn the funcitons to the variables and can we can create the functions in object also at the fnal all javascript functions are plain javascript objects

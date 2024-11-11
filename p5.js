var x = 1;
function f(){
    function g(){
        console.log(x);
    }
    g();
    console.log(x);
}
f();

function f(){
    function g(){
      let x = 1;
      console.log(x);
     }
     g();
    
}
f();
console.log(x);
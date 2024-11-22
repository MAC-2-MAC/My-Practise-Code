const sum = (x,y) => {
    return x+y;
}

console.log(sum(20,30));

//-----------------------------------------

const sum1 = (x,y) =>{
    setTimeout( ()=>{
        return x+y;
    },2000);
    //this sum1 functions returns nothing thats why it is showing undefined in the result
}

console.log(sum1(20,30));

//----------------------------------------------

const sum2 = (x,y)=> {
    setTimeout(
          ()=> {
            printResult(x+y);
          },2000);
}

function printResult(result){ // this function tooks the result from the cbf callback function from the settimeout sum2 function
    console.log(result);
}

console.log(sum2(20,30)); // it first executes the sum2 function and show the output as undefined and then after that the callback function will be executed in the for

//console.log("test question--------------------------------");

// const add=(a,b)=>{

//     setTimeout(()=>{

//         print(a+b)

//     })

//     return 70

// }

// function print(val){

//     console.log(val)

// }

// console.log(add(5,10));

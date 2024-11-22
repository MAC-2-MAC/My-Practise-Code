// const sum = (x,y,cbf)=> {
//     setTimeout( ()=> {
//         cbf(x+y);
//     },2000);
//     return;
// }

// console.log(sum(20,30,function(result){ //directly calling the callback function in console itself as we use it for one time only
//     console.log(result);// this calls 50 after 2 sec

//     sum(result,30,function(result2){
//         console.log(result2); // this calls 80 after 2 sec of 50
//     });
// }));


console.log("example problem----------");

function add(a,b,cbf){
    setTimeout( ()=> {
        cbf(a+b);
    },2000);
    return;
}

const print = function cbf(result2){
    console.log(result2);
}

console.log(add(20,30,print));
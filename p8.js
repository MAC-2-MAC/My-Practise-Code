// let a = 40; b = 50;
// if ( a > b){
//     console.log("a is greater than b");
// }else{
//     console.log("b is greater than a")
// }

// let a = 30; b = 40; c = 50;
// if (a>b){
//     console.log(" a is greater than b")
// } else if(b>c) {
//     console.log("a is greater than c")
// } else{
//     console.log("c is greater than a,b")
// }

// let a = 50; b = 40; c = 30;
// if (a > b && a > c){
//     console.log("a is greater than b and c");
// } else if(b > a && b > c){
//     console.log("b is greater than a and c");
// } else{
//     console.log("c is greater than a and b");
// }
// let a = 50; b = 40; c = 30;

// if(a > b){
//     if(a > c){
//         console.log("a is greater than b and c");
//     }
//     else{
//         console.log("c is greater than a and b")
//     }
// }
//  else if(b > c){
//     console.log("b is greater than a and c");
// }

// if(50 > 30){
//     if(20 > 40){
//         console.log('20 is greater than 30,40')
//     }
//     else if(30 > 40){
//         console.log("30 is greater than 40");
//     }
//     else{
//         console.log("50 is greater than 20,30");
//     }
// }

let phonecost = 200000; mySavings = 18000; creditCardBalance = 5000;

if(phonecost < mySavings){
    console.log("congratulations you have enough amount to buy the phone")
}
else if(phonecost < mySavings+creditCardBalance){
    console.log("if we use credit + my savings then we can buy the mobile")
}
else{
    console.log("if we combine my saving and credit limit also we cant buy the phone");
}

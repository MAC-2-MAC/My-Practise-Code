let num = 20;
let num2 = -2.4;
let num3 = 4.6;
let num4 = 5.4;
let num5 = -2.9;
let num6 = 3;
let numArr = [20,40,2,4,300];
console.log(Math.round(num2));// math.round(); will round figure the value in number it the .value is greater than 5 then it will return the next number 3, or else return the below number 2
console.log(Math.ceil(num4)); // this ceil method will return the next largest number 5.4 was given it will display the largest number 6.
console.log(Math.floor(num4)); // this floor method will return the next below number 5.4 was given and it will display the output as 5.
console.log(Math.trunc(num5)); // this trunc method will remove the decimal values after the number
console.log(Math.pow(8,3)); // this pow method there will be two parameters one will be value and the next parameter will the power value of the first value 8*8*8=512;
console.log(Math.sqrt(25));// this will return the squareroot value of the given number
console.log(Math.abs(num2)); // this will give the absolute number what we give in the variable but always give positive result only if we -ve also it will convert into +ve
console.log(Math.min(...numArr)); // this will give the least value in an array or object we are using spread operator to which is equal to Math.min(, , , , , , ,)
console.log(Math.max(...numArr)); // this will give the highest value in an array or object
console.log(Math.random());// gives random number between 0 and 1
console.log(Math.random()*10); //gives random numbe between 1 and 10;
console.log(Math.floor(Math.random()*100));// gives random number between 1 and 100; here we are using math.floor to round up the decimals

//Math.round(); , Math.ceil(); ,  Math.floor(); ,  Math.trunc(); ,  Math.pow(); ,  Math.sqrt(); , Math.min(); ,  Math.max(); ,  Math.random(); ,  Math.abs();
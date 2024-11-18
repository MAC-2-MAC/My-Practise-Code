//global object we run all the code which is written in this file in browsers console

console.log(window); // the will have a window object inbuilt when we create a javascript code

var x = 1; // which is a global variable is also a windows property aslo we can check that using the windows console we have to check whether window.x =1 , if we check window.y then it results in undefined as we didnt define the property at ,
window.y = 10; // this creates the var y in the global scope and if we check y values then also it shows the same value 10
let products = `[{"name":"Mehdi Ameen Chittiwala","age":24,"gender":"Male"}]`; // this is a json data always be in backticks
let myJSON = JSON.parse(products); //JSON.parse(json file name) is used convert a json file into a javscript object
console.log(products); // we can check here this is a string json printed
console.log(typeof products);  // checking the type of json which is string
console.log(myJSON); // we can check this will return a javascript object
console.log(typeof myJSON); // we can check the datatype here

let myJSON2 = JSON.stringify(myJSON); //javascript object is converted to string for sending json file to server
console.log(myJSON2); // we can see the output as a string
console.log(typeof myJSON2); // the datatype of the converted myjson2 will show as a string which was object before stringify();

let addedData = {
    city: "machilipatnam",
    pincode: 521001,
    state: "Andhra Pradesh"
}
myJSON.push(addedData);
console.log(myJSON);

let num = [23,42,203,23];
let result = Math.max(num); // this will show NaN because math.max wont accept arrays
let result1 = Math.max(...num);// this will result as spread operator is used , the spread operator will pass the elements of the array with comma separated values
console.log(result);
console.log(result1);

//-----------------

let num1 = [21,343,21], num2 = [32,12,34]
//let num3 = Array.concat(num1,num2); old method
let num3 = [...num1,...num2]; // this will take elements from both array and include them as the comma separated values in the new array num3
console.log(num3);

//--------------object 

var obj = {
    Name: "Mehdi Ameen Chittiwala",
    age: 24,
    gender: "male",
    emails:[
        "connect.mehdi123@gmail.com",
        "mac123@gmail.com"
    ],
    address:{
        city: "machilipatnam",
        pincode: 521001,
        state: "A.P"
    }
} // this is an object data with in there are arrays and objects too

const objCopy = {
    ...obj // this is a duplicate of obj object which can be copied by using the spread operator, it is looks same but it is not a deep copy , it is a shallow copy of the obj object, means if we change some data in primitive datatypes in objcopy it wont reflect in original obj object but if we change some data in non-primitive data types like arrays and objects it will reflect in the original object also, we can see third email is added and country is also added
}
console.log(objCopy);

console.log("=====================================")

objCopy.Name = "MAC"; //wont reflect in original obj as it is primitve data type
objCopy.emails.push ("mehdi.ameen.92786@gmail.com"); // this will reflect because it is non-primitive array
objCopy.address.country = "India"; // this will also reflect because it is  a non-primitve object

console.log(obj);
console.log(objCopy);

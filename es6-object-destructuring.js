const data = {
    name:"mehdi",
    gender: "male",
    age: 24,
    MailIds :[
        "connect.mehdi123@gmail.com",
        "mehdi.ameen.92786@gmail.com"
    ],
    address:{
        city:"machilipatnam",
        pincode: 521001,
        state: "A.P"
    }
}

//const name = data.name;// old way to destruturing the object with objectname.property to assign it to a new variable
//console.log(name);

//const myCity = data.address.city;
//console.log(myCity); //old way

const {name:myName,gender:myGender,age:myAge,MailIds:[primaryMail,secondaryMail],address:{city:myCity,pincode:myPincode,state:myState}} = data; // here we destrutured the object with differnt names as we assign them using propertyname: new variable name propertyname is the property name in the object which we are destructuring them and if we have arrays and objects with inthe objects them there is also the process we can assign them as a new variable, all the values are reassigned new variable names, this method is useful when we want to convert more elements in the objects into varaibles or else old method is fine to destructure some elements in the object
console.log(myName);
console.log(myGender);
console.log(myAge);
console.log(primaryMail);
console.log(secondaryMail);
console.log(myCity);
console.log(myPincode);
console.log(myState);
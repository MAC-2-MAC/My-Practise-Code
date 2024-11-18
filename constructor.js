function Person(name,age){ // this is a constructor function where we declared it with first captial letter
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello, My Name is",this.name);
    }
}
//console.log(Person.greet());

let person1 = new Person("mehdi",25);// with 
person1.greet();

let person2 = new Person("ismail", 22);
person2.greet();


function People(name,age){
   this.name = name; // returns the name we enter in the parameters when function gets called
   this.age = age; 
   }
People.prototype.celebrateBirthday = function (){ // by creating this prototype which can be shared by all the new objects which will inherit the constructor function , will save the space memory by creating it for only one time not nth number of time the new object is created
    this.age++;
}


// returns the age what we enter in the parameters when function gets called
//newly created object is passed as the call context for this 
// three things happen when we create a new object first it creates a new object second the call context will set to the newly created obj and third it automatically returns the obj even we didnt mention to call.

console.log(new People("mehdi",25)); // here also new People() creates an empty object for the orignal constructor function

let mehdi = new People("mehdi",25);
console.log(mehdi);
mehdi.celebrateBirthday();
console.log(mehdi);

let hazee = new People ("Hazee", 26);
console.log(hazee);
hazee.celebrateBirthday();
console.log(hazee);

console.log(mehdi.__proto__ === People.prototype);// here we get true because the mehdi obj inherits the properties from the constructor function so prototype will also be the same for both
console.log(hazee.__proto__ === People.prototype); // here we get false because though mehdi obj is same as hazee obj but it cant share the same prototype





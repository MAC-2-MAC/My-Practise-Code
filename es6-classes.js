class Person { //class created
    constructor(name,age,country){ //constructor created
         this.name = name;
         this.age = age;
         this.country = country;
    }// this a constructor class which is a blue print of the instance objects all objects have the same ui

    greet(){ // this a method named as greet we can give any name
     console.log(`"My Name is ${this.name} and i am ${this.age} years old and i am from ${this.country}"`);
    }
}

let john = new Person("mehdi",25,"india"); // here we created an instance of the class person using new keyword like that we can create as many instance as we can 
console.log(john); 
john.greet(); // this will call the greet method in the class person

let doe = new Person("ismail", 22 , "iran");
console.log(doe);
doe.greet(); // calling the greet function of the class person  like this we can create as many instance as we can


//=================
// creating class without constructor its not mandatory to add constructor to class but we cant take values from the instances created for taking values from the instances and providing different outputs everytime we need to give the constructor in the class
class Person2 {
    greet2(){
        console.log("this method is called without the constructor");
    }
}

const john2 = new Person2(); // javascript adds default parameter with nothing in it , if we didn't give constructor to the created class
console.log(john2);
john2.greet2();

const john3 = new Person2();// this will create an empty object
console.log(john3);
john3.greet2();

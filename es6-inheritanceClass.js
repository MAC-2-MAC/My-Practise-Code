class Person{
    constructor(name,age){
        this.age = age;
        this.name = name;
    }

    greet(){
        console.log("Good Morning",this.name);
    }

    celebrateBirthday(){
        this.age++;
    }
}

const emp = new Person("MAC",25);
console.log(emp); //age 25
emp.celebrateBirthday(); // age increases by one year as we give this.age++
console.log(emp); //age 26


console.log("-----------inheritance class---------------------");

class Person2 extends Person{
// we didnt give any cosntructor or methods in this newly created class  we just extends the properties and methods from the super class person that it , we can use all the methods which we can use in super class in this person2 class also
}

const emp2 = new Person2("Gac",22);
console.log(emp2);
emp2.celebrateBirthday();
console.log(emp2);

console.log("-----now we want to add more properties and methods to the extended class we will see below -----------");

class Person3 extends Person{
    constructor(name,age,role,dept){
        super(name,age);
        this.role = role;
        this.dept = dept;
    }

    promote(){
        this.role = "senior "+this.role;
    }

    celebrateBirthday(){ // we have same celebrate birthday method in super class, but we are calling from person3 class this celebrate method will be execured, but to execute the both methods in super class and ths class we give
        super.celebrateBirthday(); // now the age will also increase as we give this.age++ in super class
        console.log('Happy Birthday'); // this will also print 
    }
}

const emp3 = new Person3("shabu",26,'Web Dev',"IT");
console.log(emp3);
emp3.promote();
console.log(emp3);
emp3.celebrateBirthday();
console.log(emp3);
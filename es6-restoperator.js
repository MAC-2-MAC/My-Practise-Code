function sort(x,y){
    console.log(x);
    console.log(y);
}
sort(14,10,25,96,32); // as we give 5 values in the function parameter but it will print only two values x,y as we pass only two parameters passed while function declaring, to store the remaining values we use rest operator which stores the remainng values in form of an array.

function sort1(x,y,...restAll1){
    console.log(x);
    console.log(y);
    console.log(restAll1);
}
sort1(14,10,25,96,32); // now we can see the 14,10 were assigned to the x,y arguments and the remaining all vaues are assigned to the rest operator as an array , the rest operator starts with ..., 

function sort2(...sortingNumbers){
    console.log(sortingNumbers);
    return sortingNumbers.sort();
}
let result = sort2(14,10,25,96,32);// the whole values which we enter in the sort2 prints as an array as we give rest operator only in the parameters while function declaring, now we can sort that array using .sort method of arr
console.log(result); // now the numbers enter in the parameters of function which converted to an array using the rest operator is sorted using the .sort() method of an array.

//---------------------------------------array destructuring-----------------------------------
let days= [
     'monday',
     'tuesday',
     'wednesday',
     'thursday',
     'friday',
     'saturday'
];

const [day1,day2] = days; // destructuring the array
console.log(day1,day2); // this will print day1 as monday and day2 as tuesday we give only two variable while destructing the array, we can store the remaing values of the array in an array using the rest operator , see below
const [day01,day02, ...restAll2] = days; // here we use ... rest operator to store the remaining values of arr
console.log(day01,day02,restAll2);// if we see the print then day01 will be monday, day02 will be tuesday, and the remaing values are displayed in an array as we apply rest operator which stores the reaming values of the array in an array form, we cant give any value of the rest operator was  given in the arguments or else it will through an error.


//----------------------object destructuring-------------------
var obj = {
    Name: "Mehdi Ameen Chittiwala",
    age: 25,
    gender: "male",
    emails:[
        "connect.mehdi123@gmail.com",
        "mehdi123@gmail.com"
    ],
    address:{
        city: "machilipatnam",
        pincode: 521001,
        state: "A.P"
    }
}

const{Name:myName,gender:myGender} = obj; // destructing the object and changing the variable name
console.log(myName,myGender); // this will print name and age of the obj
const{Name,Age,...restAll3} = obj;// destructuring the obj with rest operator
console.log(Name,Age,restAll3);//  here name , age will print from the object and the remaining data in the object are stored in form of an array as we use the rest operator
const{Name: myName1,age:myAge1,address:{city}, ...restAll4}= obj; // here we are using the city from the address obj , if we any value from the obj then rest operator won't take it as the reaming values even though there might be other values in the address obj , rest operator wont take those in 0bject
console.log(myName1,myAge1,city,restAll4); // in the result adress obj remaining values are not get printed as we use city from the address obj so rest operator wont take it as rest

// NOTE: ARRAY DESTRUCTING WILL KEEP VALUES IN THE FORM OF AN ARRAY
// OBJECT DESTRUCTURING WILL KEEP VALUES IN THE FORM OF AN OBJECT

let name1 = {
    firstName: "Mehdi Ameen",
    lastName: "Chittiwala",
    printName: function(){
        console.log(this.firstName+" "+this.lastName);
    }
}

let name2 = {
    firstName: "Md Syed",
    lastName: "Hazee"
}
name1.printName.call(name1);
name1.printName.call(name2); // we are borowwing the printName function from name1 obj and using that in name object using the call method, then this function would refer to the name2 obj rather than name1 because of call method used

// we can either create a separtate function for getName use it whenever we want

let name3 = {
    firstName: "jafar",
    lastName: "abbas"
}

let name4 = {
    firstName: "ghazi",
    lastName: 'abbas'
}

let getFullName = function (age,gender,city,pincode){
    console.log(this.firstName+" "+this.lastName+" "+age+" "+gender+" "+city+" "+pincode);
}

getFullName.call(name3,123,"male","mtm",521001);
getFullName.call(name4,456,"male","hyd",5000084);

// apply method is used to return the output , this is also same as call method but in apply we can only pass two arguments one is the this context and other is the array context, in the array we can pass infiite value, but can we cant define it individually like in call thats the main difference

let names5 = {
    firstName : "Mehdi",
    lastName: "Ameen"
}

let names6 = {
    firstName: "Syed",
    lastName: "Abbas"
}

let printNames = function (age,phno,pincode,doorno){
    console.log(this.firstName+" "+this.lastName+" "+age+" "+phno+" "+pincode+" "+doorno);
}

printNames.apply(names5,[24,8121714575,521001,415]);// we can check by removing the array braces to see diff
printNames.apply(names6);


//bind method
let names7 = {
    firstName : "Mehdi",
    lastName : "Ameen Chittiwala"
}

let names8 = {
    firstName: 'Syed',
    lastName: 'Abbas'
}

let printFulNames = function( ){
    console.log(this.firstName+" "+this.lastName);
}

printFulNames.call(names8);// this will give you the output instantly but in bind we can store a copy and can invoke whenever we want that

let printAllNames = printFulNames.bind(names8); //by using printAllNames we can just paste the bind method cant overwrite it by changing the object values in the pasted area.
console.log(printAllNames);// this will create a duplicate copy of printNames and we can call it later also
printAllNames();

let names9 = {
    firstName: "MAC",
    lastName: "GAC"
}
printFulNames.call(names9);


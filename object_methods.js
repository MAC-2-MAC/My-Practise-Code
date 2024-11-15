let places = {
    location1: "delhi",
    location2 :"mumbai",
    location3 :"hyderabad"
};
console.log(places); // this will display out of the all properties and values inside the object variable

for( let x in places){
    console.log(x); // this will return the properties of an array 
    console.log(places[x]); // this will return the property after that it will display the value its iterates
};

let teamNames = {
    team1: {
        name:"Mehdi Ameen Chittiwala",
        age: 26,
        gender: 'male'
    },
    team2: {
        name: "GAC",
        age: 22,
        gender: 'female'
    }
}
console.log(teamNames);// this will return the nested objects as output

for(let x in teamNames){
    console.log(x);
    console.log(teamNames[x]);
}
console.log("==================")
for(let x in teamNames){
    console.log(x);
    for( let y in teamNames[x]){
        console.log(" ",y,":",teamNames[x][y]);
    }
}

let num = new Number(12);// creates a new number object
console.log(num,typeof(num));

let str = new String("mehdi");// creates a new string object
console.log(str,typeof(str));

let carPrice = {
    creta: 15000, honda: 20000, toyota: 50000
}
console.log(carPrice);
//insertion into an array
console.log("=====insertion into an object=======")
carPrice.wagnor = 25000;
carPrice.switf = 35000;
console.log(carPrice);
console.log("=========updation in an object=======");
carPrice.toyota= 45000;
carPrice.creta = 20000;
console.log(carPrice);
console.log("========Deletion in an object========");
delete carPrice.wagnor;
delete carPrice.switf;
console.log(carPrice);
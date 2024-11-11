for ( let i = 1; i <= 10; i++){
    console.log("this is number:",i);
}

console.log("---------------for in loop---------------");

let details = {
    name: "mehdi",
    age: 25,
    gender: "male"
}

for(let x in details){
    console.log(details[x]);
}

console.log("-----------------for of loop-----------------");

let names = ["mehdi,ameen,shireen,ismail,afroze,parveen"];
for(let x of names){
    console.log(x);
}

console.log("------------------------while loop--------------");
let i = 0;
while (i<10){
        console.log(i);
        i++;
}

console.log("-----------------------do while loop----------");

let j = 21;
do{
    console.log(j);
    j++;
}
while(j<20);
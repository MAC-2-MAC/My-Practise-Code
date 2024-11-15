let values = new Set(["hii",123,true,false,"123"]); //creates a new set{5}
console.log(values);

let list = new Set(); // creates new set
console.log(list.add(123)); // adds 123 to set
console.log(list.add("hii")); // adds "hii" to the set
console.log(list.add(123)); // if we try to again add 123 to the set then it wont add because of duplicate value

values.delete("hii");
console.log(values);
console.log(values.has("123"));// returns boolean value if the value matches
console.log(values.clear());
console.log(values);

let values2 = new Set(["hii",123,456,true,false,"123"]);
let result = values2.values();
for(let x of values2){
    console.log(x);
}

let result2 = values2.entries();
for(let x of result2){
    console.log(x);
}
    
console.log("====map methods==========");
let mapList = new Map([
    ['name','mehdi'],
    ['age',25],
    ["Ph.no:",8121714575],
]);
console.log(mapList);
mapList.set("pincode",521001); // inserts into map 
mapList.set("name","Mehdi Ameen Chittiwala"); //updates the map
console.log(mapList);
console.log(mapList.get("name")); // returns the value of the key passed.
mapList.delete("age"); // deletes the key value pair of the key passed.
console.log(mapList);
let result3 = mapList.values();
console.log(result3);
let result4 = mapList.keys();
console.log(result4);
let result5 = mapList.entries();
console.log(result5);
console.log(mapList.size);
mapList.clear();
console.log(mapList)
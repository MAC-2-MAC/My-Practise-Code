const data = new Set( [ 2,4,6,23,45 ] ); // creates a set
console.log(data); // displays the set object

console.log(data.size); // displays the size of the object which is 5

data.add(32); // 32 will be added to the set
console.log(data);
data.add(23); // 23 wont get added as 23 is already there in the set, set wont accept duplicate values
console.log(data);
data.delete(6); // 6 will be deleted from the set
console.log(data);

console.log(data.has(4)); //returns true as 4 is there in set
console.log(data.has(32)); //returns false as 32 is not present in the set

for(let x of data){ // iterates all over the set and returns the values each time
    console.log(x);
}
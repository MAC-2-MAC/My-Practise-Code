const numbers = new Map( [ [1,"one"], [2, "two"], [3, "three"] ] ); // ,map object has an array of tuples means array of key value pairs which later can be accessed with their keys or values
console.log(numbers); // shows the map objects

console.log(numbers.size); //3 as an output as there are three tuples in map object

console.log(numbers.entries()); // this will display the entries the map object in the form of array of tuples  , entries methods will show array of tuples and calling the map name will show the map object

numbers.set(40,"fourty");
console.log(numbers); // fourty will be included as the fourth tuple in the array object as we add them using set method

numbers.delete(2);
console.log(numbers); // 2nd tuples will be delete from the map object as we delete it using delete(2);

numbers.delete("one"); // we cant delete the tuple using the value of the key value pair tuple
console.log(numbers);// this will show as it including tuple it wont delete

console.log(numbers.get(1)); // this get method will show the value of the key entered in the map object

for(let [key,value] of numbers){ // this will iterates over key value pairs in the map object
    console.log(`${key} = ${value}`)
}

numbers.clear(); // this will erase all the tuples in the map object and makes it empty
console.log(numbers); // this will an empty tuples as we use clear() method to erase all data in map object
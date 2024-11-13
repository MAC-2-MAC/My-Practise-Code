let word = "crypto currency";
console.log(word.length);// gives the length of word including white space values also
console.log(word.slice(7,12)); // slices has two parameters one starting value to slice from and other is ending values it can also take -ve values from where we count from reverse like -1,-2,-3......
console.log(word.substring(7,12));// this is same as slice method which two parameters one is starting and other is ending point but in substring methods we cannot give -ve values if we give it will consider it as zero and return the whole stirng, and if we starting point index value greater than the ending point index value it will automatically swaps the values and returns the output
console.log(word.substring(12,7));
console.log(word.substring(-3));// same as slice method but it has two parameter one is the starting index and the other value refers to the length menas after the starting value slice 4 value in the string
console.log(word.replace("crypto","digital"));// replaces a already assingned word with new word 
console.log(word.toUpperCase());// make all the string into capital letters
console.log(word.toLowerCase()); // make all the string into lower case letters
console.log(word.charAt(2));// returns the string letter at given specified index number
console.log(word.trim("  crypto currency  ")); // removes white spaces from the starting and ending points
console.log(word.split(" ")); // split method will convert a string into an array with specified conditions
console.log(word.split(",")); //splits where comma is
console.log(word.split("and")); //splits where and is
console.log(word.split("")); //splits the every single letter into an index in an array
console.log(word.split()); // if we didn't give parameters then it will save the string into first zero index of an array
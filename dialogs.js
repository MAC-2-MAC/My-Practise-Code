//window.alert() dialogue
alert("are you ready to visit website");// this will block the website until we press ok for the alert it shows when the page loads then only the remaining code will be dispalyed until then it will be in block mode
console.log("this message is displaying after the alert dialog");

//window.confirm () dialogue
let result = confirm("are ready to visit the website or not "); // this will display two option ok or cancel, if we press ok then returns true or else returns false , and then the remaining code will be executed and displayed after the confirm 
console.log(result);

//window.prompt() dialogue
let result2 = prompt("which city you belongs to ?","Banglore"); // this will return a prompt like a question asknig and there will be a text field to enter the answer for the question asked in the prompt dialogue box, in the second parameter of the prompt dialgue box we can give the default value in the text area, after pressing submit it will print the data entered in the textarea as the output for result and then the remaining code will be executed
console.log(result2);

const obj = {
    first: "virat",
    last: "kohli",
    twitter: "@vkohli",
    company: "cricket"
}

function displayName({first,last}){ // here first and last are inherting from the obj object above mentioned
     //const {first,last} = obj;
    console.log(`${first} ${last}`);

}
displayName(obj);
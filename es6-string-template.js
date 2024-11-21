const firstName = "Mehdi Ameen";
const secondName = "Chittiwala";
//const FullName = firstName + " " + secondName+" !"; this is normal way
const fullName = `${firstName} ${secondName}!` // this is string literals method where we use backticks inside that we use variables with ${ } inside curly braces  we give variable name and no need of + symbol for concatinating and giving spaces
console.log(fullName);

const tableDetails = {
    Name: 'mehdi',
    gender: "male",
    age: 25
}

const strTr = "<tr>"+
"<td>"+tableDetails.Name+"</td>" +
"<td>"+tableDetails.gender+"</td>" +
"<td>"+tableDetails.age+"</td>" +
"</tr>"; // this is common way and its looks confusing also
console.log(strTr); 

const data = `<tr>
<td>${tableDetails.Name}</td>
<td>${tableDetails.gender}</td>
<td>${tableDetails.age}</td>
</tr>`; // using this string template using with backtics method we can declare it easily and we can arragne them in correct order we can see the differnce also 
console.log(data);
function Name(firstName,lastName){
    console.log(`${firstName} ${lastName}`);
}
Name("Mehdi Ameen", "Chittiwala"); // here we declare two parameter values when we call the function

function Name2(firstName="Mehdi Ameen",lastName){
    console.log(`${firstName} ${lastName}`);
}
Name2(undefined, "Chittiwala"); // here we give the firstname value as the default parameter itself 

function Name3(firstName="Mehdi Ameen", lastName="Chittiwala"){
    console.log(`${firstName} ${lastName}`);
}
Name3();// here we didnt even pass any parameter values while calling the function as the value are added to the default parameter of the function while declaring
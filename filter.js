var days = [
    {day: "sunday", hours: 2},
    {day: "monday", hours: 4},
    {day: "tuesday", hours: 6},
    {day: "wednesday", hours: 8},
    {day: "thursday", hours: 10}
];

days.forEach(function(items){
    console.log(items);
});
console.log("this below array is printed using the filter method");

let filterMethod = days.filter(function(items){
    //return false; // this filter method have true or false condition if the condition gets true it prints the result , if false doesnt return any output but just creates a new array only
    //return items.hours>= 6; // here three items gets condition true and those three will be printed 
    return items.hours>=6; // we cant give other condition except true or false result it will get error
});
console.log(filterMethod);

// at final filter method is used to get the output based on the true or false conditon based on the condition we provide , can call like the if condition in looops



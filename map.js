var days = [
    {day: "sunday", hours: 2},
    {day: "monday", hours: 4},
    {day: "tuesday", hours: 6},
    {day: "wednesday", hours: 8},
    {day: "thursday", hours: 10}
];

days.forEach(function(item){
    console.log(item);// here return wont print the items
});

days.filter(function(item){ // this filter method creates a new array but we have to assign it to a new varia
    return item.hours>=6;
})

let filterMethod = days.filter(function(item){
    //return item.day=="monday";
    return item.hours>=6;
})
console.log(filterMethod);

let map = [1,3,5,10];
let filterMethod2 = map.map(function(item){
   return (item+item) - 1;
   //console.log((item*item)-1); // map and filter methods are designed to tranform or filter the array so we cant use console.log () to get the output instead of that we use return keyword to get the result.
   
})
console.log(filterMethod2);
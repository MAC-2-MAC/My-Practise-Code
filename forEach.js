let days = [
    {day:"monday", hours: 5},
    {day:"tuesday", hours: 7},
    {day:"wednesday", hours: 9},
    {day: "thursday", hours: 10}
];

days.forEach(function(mehdi){ // for each is a shortcut and easy form of a for loop , where it can iterate over all objects present in an array but in the sequence order they were written, in for loop we use index values to iterate over the object or an array, here in forloop we dont use 
    //console.log(mehdi);
    console.log(mehdi.hours);
})
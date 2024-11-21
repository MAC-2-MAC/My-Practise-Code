const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
]

const first = days[0], second = days[1], third = days[2], fifth = days[4], seventh = days[6]; // as there were only 5 elements in the array the sixth we called for will show as undefined, this is the old method to destructuring the array
console.log(first,second,third,fifth,seventh); // logs the values of variables respectively 

const[first1,second2,third3, ,fifth5="holiday",seventh7="holiday"] = days; // here the values will be assigned as per the index values of the array if we want to skip an array then we have give space and add comma there then it will skip that index, like that we can skip many values as we want, this way of array destructuring is useful when we have to create many variables from the the array or else we can stick to old method only, and we can assign the value to the newly added index in its parameter itself then will be displayed when it called, if we assign a default parameter for the index which is already present in the array then it wont get display the value of the index array will be displayed.
console.log(first1,second2,third3,fifth5,seventh7);  
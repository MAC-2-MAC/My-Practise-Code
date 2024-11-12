//1. Array Creation
let team_names = ["MAC","GAP","SAP","SEC"];
console.log("Team Names are: ",team_names, "Array DataType is:",typeof team_names);

let team_list = new Array("aziz","hazee","shabu","jafar","sadiq",123);
console.log("Team List Names are:",team_list);
console.log("DataType of the first Element in the array is:",typeof(team_list[5]));

//2.Operations on Array
team_names[team_names.length] = "SAMAS"; // adds the value to the next upcoming index in the present
console.log(team_names);

team_names[2] = "SHAHABUDDIN"; //updates the new value in the array where old values replaces the new value
console.log(team_names);

team_names[10] = "MBR FASHIONS"; // here the 10th index in the array will be assigned the value and there will 5 emply elements in between them
console.log(team_names);
console.log(team_names.length);

//3.Array in built-methods
team_names.push("FATHIMA DRESSES"); // adds the value to the next upcoming index in the array
console.log(team_names);

team_names.pop(); // removes the last added index in the array
console.log(team_names);

console.log(team_names.reverse());
console.log(team_names.sort());
team_names.push("abbas");
console.log(team_names);
console.log(team_names.sort()); // sorts the array in aplhabetical order here abbas is in last index because it was written in captial letter if we can change them caps or just change the first letter to capital then it will show on the first index[0]
console.log(team_names.length);// shows the length means now many index are present in the array 

console.log(team_names.concat(team_list)); // it concates the two array 

console.log(team_names instanceof Array); // check the our object is an array  or not
console.log(Array.isArray(team_list)); // another method to check whether it is an array or not

console.log(team_names.indexOf("SAMAS")); // if the passed value in index of matches then it will show the index of that value in the array or else it will show -1 means the value not found in the array.If samas is pren
console.log(team_list.at(2)); // used to get the value of the index number in the given brackerts .at(2)
console.log(team_list[2]);


let combined_array = team_names.concat(team_list); //we can concat the strings and numbers also team_names.concat("leaves",123)
console.log(combined_array);
console.log(combined_array.sort()); // numbers will come first then capitals and after then small letters

let arr_to_string = combined_array.toString(); // this method is used to convert the object values into a single string value this only used in the new created variable the original arr remains same in its datatype
console.log(arr_to_string);
console.log(typeof arr_to_string);//string
console.log(typeof combined_array);//object

let number = new Array(20); // unexpected error arrives here so we try to add only single value then we should use the another approch or else it will print 20 empty elements we can use this for two values then it works good
console.log(number);

let num = [20]; // we have to use like this to get the single value number array
console.log(num);
let arrToString = combined_array.toString();
let arrToJoin = combined_array.join();
console.log(arrToString);
console.log(arrToJoin);

console.log(team_names.shift()); // this method shift the first index value from the array and deletes from the original array if we give this shift() in a new variable then that variable will be assigned the deleted value
console.log(team_names);// gap was deleted from the array

team_names.unshift("GAP");
console.log(team_names); //unshift method add a news element in the first index an unshifts the older array

delete team_names[0]; // delete option leaves empty elements in the array instead of that we have to use pop(), shift()
console.log(team_names);

let arrname = [0,1,2,3,4,5,6,7,8,9];
console.log(arrname.copyWithin(2,7,9));//here copywithin method traverses the values with in the array without creating  a new array first value is targer value from where should we start the traversing and the middle value is from where we have to traverse and at the end it is where we should end the traverse.

const myArr =[ [1,2], [3,4], [5,6] ];
const newArr = myArr.flat(); // used to flat the multi dimenssional array into a single dimensional array
console.log(myArr);
console.log(newArr);
console.log("------");

const arr1= newArr.splice(0,2,10,20); //used to add new value into an array with having 3 parameters ( first one target value which tells from where the values should be added, and second values tell how many values should be deleted after the insertion array,3,4,5...values are the values to be added);
console.log(newArr);
console.log(arr1);
console.log("---------");

const arr2 = newArr.splice(2,2,40,50,60);// this arr2 will show return the deleted values from the array
console.log(arr1);
console.log(arr2);
console.log("=======")
console.log(team_list);
team_list.splice(0,2);// used to delete the values from the array first value is the position where to start deleting and second value is how many value should have to be deleted
console.log(team_list);
console.log(team_list.splice(2));//splices the first two indexes in the array

console.log("======");
const months = [ "jan","feb","mar","apr",'may',"feb","june","july"];
let spliced = months.toSpliced(1,3); // this new method is introduced in 2023 which directly creates a new array when it gets spliced, the old array will remain same as it was (answer is : jan,may,june,july)
console.log(spliced);
console.log("======");
const arr4 = months.slice(2);// this method is used to slice from the array and creates a new array , it slices from the index number which we provide it in the brackets
console.log(arr4);
console.log("======");
const arr5 = months.slice(1,5);// here splice method is used to create a new array from the existing array where the first index indicates index number from 0 from where it should start slicing and the second parameter is the value start from array length means it starts from 1 so we have to give values accrodingly.
console.log(arr5);
console.log("====array searching methods===");
console.log(months.indexOf("feb")); // shows the first index if it has two same values
console.log(months.lastIndexOf("feb"));// shows the last index if it has two same values
console.log(months.includes('feb')); // if values passed in the brackets is present, will result true or false
const arr6 = [2,5,7,8,10];// returns the first value after the condition matched
let arr7 = arr6.find(myFunction);

function myFunction(value,index,array){
    return value > 7;
}
console.log(arr7);
console.log(arr6.findIndex(myFunction));// finds the index of the first matched value after condition satisfy
console.log(arr6.findLast(myFunction)); // here it will search from last index which satisfies the condition
console.log(arr6.findLastIndex(myFunction)); // finds the index of first matched value, starts from descending

console.log("========array sorting methods===========");

const arrNames = ["mehdi","imran","sheeba","ismail","rubab","zehra"];
console.log(arrNames.sort());//sorts the array in alphabetical order;
console.log(arrNames.reverse());// reverse the array

let arrToSorted = arrNames.toSorted();
console.log(arrToSorted);// this new es2023 concept where it creates a new array instead of altering old array

let arrToReverse = arrNames.toReversed(); // not working in node.js environment
console.log(arrToReverse);

let arr8 = [1,34,53,64,23,544,12,100];
console.log(arr8.sort()); // this will give different output than we expect so we use some function to get correct output
console.log(arr8.sort(function(a,b){ return a-b;})); // this will give the output what we expect
console.log(arr8.sort(function(a,b){ return b-a;}));// descending numbers sort

console.log("=========array iteration=========");
// const arr9 = [20,40,50,20,100];
// let result = " ";
// arr9.forEach(myFunc);
// function myFunc(value,index,array){
//    result += value + "<br>";
// };
// console.log(result);
const num1 = [ 10,25,50,100 ];
let result = num1.map(myFunc); // used to get a new array and this map method will go through each element in the original array and applies the given rule in function to each element and returns the data in the new aray
function myFunc(value,index,array) {
return value * 2;
}
console.log(num1);
console.log(result);

let result2 = num1.filter(myFuncTwo); // filter creates a new array with the condition passes the test-functio
    function myFuncTwo(value,index,array){
        return value > 25;
    };
    console.log(result2);

    let result3 = num1.reduce(myFunc3,200); // reduce is used to get the sum of total element values, it has two parameters one is total menas the initial value of the array and the value means the total sum of other elements in the array, and it can also have the second parameter in the reduce declaring fucntion where we mention 200 it add the 200 value to the result and displays it as the output

        function myFunc3(total,value){
            return total + value;
        }
    console.log("the intital value to remainig value sum is:",result3);//185

    let result4 = num1.reduceRight(myFunc4); // both reduce and reduce right method are same but reduce will start from left to right and reduce right will start from rgiht to left
    function myFunc4(total,value,index,array){
          return total + value;
    }
    console.log(result4);

    let result5 = num1.every(myFunc5); //every is used to check the conditon while all the elements in the array passes the condition then it result true or else return false
    function myFunc5(value){
        return value > 20;
    }
    console.log(result5);

    let result6 = num1.some(myFunc6); // some checks whether some of the elements in the array passes the condition given in the function.
    function myFunc6(value){
        return value > 20;
    }
    console.log(result6);
    
    let alpha = Array.from("abcdefghij");// this arry.from method creates a new array from a given string or numbers
    console.log(alpha);

    // let arr10 = ["apple","banana","cat","dog"];
    // let keys = arr10.keys();
    // let text = " ";
    // for(let x of keys){
    //     text += x + "<br>";
    // }
 
    let arr11 = ["banana","grapes","oranges","lemons"];
    let arr12 = arr11.with(2,"pomogranates");// this with method will return a a new array with the changed value which we give in the brackets the original array will be same as it is.
    console.log(arr12);
    console.log("=========spread array=======")
    let arr13 = [...arr8, ...arr11, ...arr12];// spread array means joins all the arrays mention with ...arrname will be added in one single arrray
    console.log(arr13);

    console.log("----here we are good to end with the arrays concepts");




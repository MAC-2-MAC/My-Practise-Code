let todaysDate = new Date();
console.log(todaysDate); // returns full date and time will millisecnods also
let today = new Date();
console.log(today.getFullYear()+"-"+(today.getMonth() +1)+"-"+today.getDay()); // returns only date 2024-11-13
let time = new Date();
console.log(today.getHours()+":"+time.getMinutes()+":"+time.getSeconds()); // returns only time 21:15:33
let date1 = new Date();
let date = date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();
let time1 = date1.getHours()+":"+date1.getMinutes()+":"+date1.getSeconds();
let date_time = date +" "+ time1;
console.log(date_time);
console.log("======================");
let newDate = new Date(2024,10,13,21,38,42,0); // we are manually passing the date and time values, months value is 0 - 11, and time is in utc
console.log(newDate);
let newDate1 = new Date(2024,15,13,21,48,23,0);
console.log(newDate1); // here year will be chagned because we gave 15 in the months seciton so after 11 it will change the year and count starts from 0 so 11 + 4( 0,1,2,3) means its 4th months, same applies to the months also if we give date above 30 + then it changes the months of the give date

console.log("=============");
const newDate2 = new Date("2024-11-13T09:48:23"); // we can pass the manually with strings also same applies for time also
console.log(newDate2);

console.log("==========");
console.log(newDate2.getTime());
console.log(newDate2.getDay()); // sunday 0 ..... 

console.log("FOR ALL GET METHODS THERE ARE SET METHODS ALSO");

let newDate3 = new Date();
console.log(newDate3.toDateString()); // it will return wed nov 13 2024
console.log(newDate3.toString()); // it will return whole date and time like a string with ist
console.log(newDate3.toLocaleString()); // returns 11/13/2024, 9:55: 54 PM
console.log(newDate3.toISOString());

var date3 = new Date();
console.log(date3.setDate(13));
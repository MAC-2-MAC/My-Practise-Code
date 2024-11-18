// execute the code in browser
console.log(location);// this will show the location object in the window

console.log(location.protocol);// shows the browser name

console.log(location.path); // undefined

location = 'https://www.google.com';// this will change the location to google.com but keep the before website in the stack to go backward also

location.href = 'https://www.google.com' //same as the location

location.assign('https://www.google.com');// this is also used to change the current location and keeps track of the before visited website in a stack order to revisit it

location.replace('https://www.google.com'); // it will change the website to google.com but never keep track of the before visited website in the stack order to revist it
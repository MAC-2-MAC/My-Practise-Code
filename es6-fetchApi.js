fetch('https://jsonplaceholder.typicode.com/todos/1') 
   .then( (response)=> response.json())
   .then((value)=> console.log(value))
   .catch(error => console.log(error.message));

   // this fetch api method which by default calls get method and it takes as the url arguments as mandatory, this url will make a contact with the server the response will come in a string format so we first convert that string to json and later we print the value of that returned json which will display as an object
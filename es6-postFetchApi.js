const newTodo = {
    "userId":1,
    "title":"quis ut nam facilis et officia qui",
    "completed":false
} // this is the json file which we want to send to the server

fetch(
    'https://jsonplaceholder.typicode.com/todos', // contacting server with this url
    {
        method: 'POST', // we are posting data to server so we use post method
        body: JSON.stringify(newTodo) // we convert json file to a string to send to the server we use stringify
    },
    {
        headers:{
            'Content-Type': "application/json" // we are uploading json format so we use application/json
        }
    }
)
.then( (response)=> response.json()) //response to the server
.then( (json)=> console.log(json)) // the json data which is sending to server
.catch( error => console.log(error)); // prints the error message
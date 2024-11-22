const xhr = new XMLHttpRequest(); // xmlhttprequest() is used to contact with server from client side

xhr.onload = function() {
    console.log(xhr.responseText); // xhr.responseText is used to convert the json into obj or arr
}

xhr.open('GET',"https://jsonplaceholder.typicode.com/todos/1"); // two parameters are first method and second url from where json is going to fetch data

xhr.send();


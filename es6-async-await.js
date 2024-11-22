const fetchAndTodos = async()=> { 
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const todo = await response.json();
        console.log(todo);
    }catch(error){
        console.log(error.message);
    }
}

fetchAndTodos();

//async must be at the starting of the function if we want to use the await before the fetch('url') , we keep the fetch url in the try block if some error occurs then the execution will move to the next code of line, async and await are always used with the functions only
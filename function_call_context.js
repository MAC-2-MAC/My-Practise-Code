function foo(){
    console.log(this);
}
foo(); // this will be an window object which javascript creates automatically it is different from the javascript casual objects like string and objects

var john = {
    name: "mehdi",
    getName : function(){
        console.log( this); // this means obj , it prints all the elements in the obj
        return this.name// this means the object this.name is equals to obj.name
    },
    age: 24,
    gender: "male"
};
console.log(john.getName());// this returns the function getname in the john object
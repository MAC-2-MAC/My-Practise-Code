var obj = {
     x : 1
};

var proto = {
    y: 10
}
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

console.log(Object.setPrototypeOf(obj,proto));
console.log(obj);
console.log(obj.y);

var obj2 = {
    z : 3
}
var obj = {
    x : 1
};

var proto = {
   y: 10
}
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

console.log(Object.setPrototypeOf(obj,proto));
console.log(obj);
console.log(obj.y);

var obj2 = {
   z : 3
}

Object.setPrototypeOf(obj2, proto);
console.log(obj2);
console.log(obj2.y);
Object.setPrototypeOf(obj2, proto);
console.log(obj2);
console.log(obj2.y);
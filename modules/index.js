// here we can add individual export before const of every code line to export it 
const sum = (x,y)=> x+y; 
const diff = (x,y)=> x/y;
const product = (x,y)=> x*y;

class ComplexNumber {
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    toString(){
        return `${this.real}+${this.imaginary}i`;
    }

}

export{sum,diff,product,ComplexNumber as default} // exporting all methods and a class which we will mention as default use, one file can have one default class 
class CarDetails {
    constructor(nameOfCar,ManufacturingYear){
     this.nameOfCar = nameOfCar;
     this.ManufacturingYear = ManufacturingYear;
    }
    age(WhichYear){
     return WhichYear - this.ManufacturingYear;
    }
}

const myCar = new CarDetails("ford",2012);
console.log(myCar);
let ageOfMyCar = myCar.age(2024);
console.log(ageOfMyCar);
console.log("my car age is :",myCar.age(2026));

console.log(typeof CarDetails);
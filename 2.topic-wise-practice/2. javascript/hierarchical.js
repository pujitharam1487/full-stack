// Parent Class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " vehicle starts");
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        console.log(this.brand + " " + this.model + " is driving");
    }
}
class Bike extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    ride() {
        console.log(this.brand + " " + this.model + " is riding");
    }
}
const car = new Car("Toyota", "Camry");
const bike = new Bike("Honda", "Shine");

car.start();
car.drive();

bike.start();
bike.ride();
console.log("\n===Single Inheritance===");
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    work() {
        console.log(`${this.name} manages the ${this.department} department`);
    }
}

const m = new Manager("Rahul", 50000, "IT");
m.display();
m.work();


console.log("\n===Multilevel Inheritance===");
class Pet {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " eats");
    }
}
class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name + " barks");
    }
}
class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }
    play() {
        console.log(this.name + " plays");
    }
}
const p = new Puppy("Tommy", "Beagle", 1);

p.eat();
p.bark();
p.play();

console.log("\n===Hierarchical Inheritance===");
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

console.log("\n===Hybrid Inheritance===");
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " eats");
    }
}
class Fish extends Animal {
    swim() {
        console.log(this.name + " swims");
    }
}
//  (Mixin)
const canJump = {
    jump() {
        console.log(this.name + " jumps");
    }
};
Object.assign(Fish.prototype, canJump);

const f = new Fish("Nemo");
f.eat();
f.swim();
f.jump();

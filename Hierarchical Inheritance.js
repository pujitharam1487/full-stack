class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    meow() {
        console.log(`${this.name} meows`);
    }
}

const d = new Dog("Rocky");
const c = new Cat("Kitty");

d.eat();
d.bark();

c.eat();
c.meow();
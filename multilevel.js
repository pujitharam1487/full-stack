class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks`);
    }
}

class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }

    play() {
        console.log(`${this.name} plays`);
    }
}

const p = new Puppy("Tommy", "Beagle", 1);

p.eat();
p.bark();
p.play();
// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

// Child Class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks`);
    }
}

const d = new Dog("Rocky", "Labrador");

d.speak();
d.bark();
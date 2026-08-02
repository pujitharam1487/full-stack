class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} eats`);
    }
}

class Fish extends Animal {
    swim() {
        console.log(`${this.name} swims`);
    }
}

// Add extra behavior (Mixin)
const canJump = {
    jump() {
        console.log(`${this.name} jumps`);
    }
};

Object.assign(Fish.prototype, canJump);

const f = new Fish("Nemo");

f.eat();
f.swim();
f.jump();
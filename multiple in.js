class Walk {
    walk() {
        console.log("Walking");
    }
}

class Run {
    run() {
        console.log("Running");
    }
}

class Person { }

// Copy methods
Object.assign(Person.prototype, Walk.prototype);
Object.assign(Person.prototype, Run.prototype);

const p = new Person();

p.walk();
p.run();
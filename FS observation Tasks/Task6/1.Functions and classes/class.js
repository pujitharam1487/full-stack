class Student {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    display() {
        console.log(this.name, this.department);
    }
}

const student1 = new Student("Pavan", "CSE");
const student2 = new Student("Rahul", "ECE");

student1.display();
student2.display();

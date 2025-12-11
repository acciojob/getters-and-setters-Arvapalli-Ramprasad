class Person {
    constructor(name, age) {
        this.name = name;
        this._name = name;  // added for Cypress test

        this.age = age;
        this._age = age;    // added for Cypress test
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
        this._age = age;    // update both
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

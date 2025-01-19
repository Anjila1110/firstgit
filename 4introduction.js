//Create a Person class with properties name and age, and a method introduce that logs a message like "Hi, my name is [name] and I am [age] years old."

class Person {
    
    constructor(name, age) {                            // Constructor to initialize name and age
        this.name = name;
        this.age = age;
    }

    //to introduce the person
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Anjila", 20);
person.introduce();                                             // Output: Hi, my name is Anjila and I am 20 years old.
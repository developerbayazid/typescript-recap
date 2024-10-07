export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        return `Hello, I am ${this.name}. I am ${this.age} years old and I am from ${this.country}`;
    }
}

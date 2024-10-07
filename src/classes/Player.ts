import { IsPlayer } from '../interface/IsPlayer.js';

export class Player implements IsPlayer {
    constructor(
        public name: string,
        private age: number,
        public country: string
    ) {}

    getProperty(): number {
        return this.age;
    }
    play() {
        return `Hello, I am ${this.name}. I am ${this.age} years old and I am from ${this.country}`;
    }
}

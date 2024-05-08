"use strict";
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`I make sounds!`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        catMew() {
            console.log(`I am cat, i mew!`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        dogBark() {
            console.log(`I am dog, I bark seldom and bite regularly!!`);
        }
    }
    const bullDog = new Dog('Bull', 'Germany');
    bullDog.dogBark();
}

{class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log(`I make sounds!`);
    }
}

class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    catMew(){
        console.log(`I am cat, i mew!`);
    }
}

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    dogBark(){
        console.log(`I am dog, I bark seldom and bite regularly!!`)
    }
}

const bullDog = new Dog('Bull', 'Germany')
bullDog.dogBark();



}

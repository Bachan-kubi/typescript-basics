class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    // parameter property

    constructor(public  name: string, public  species: string, public  sound: string){
        // name: this.name;
        // species: this.species;
        // sound: this.sound;
    }
    sleep(){
        console.log(`my ${this.name} sounds ${this.sound} at 10pm`)
    }

}

const dog = new Animal('shephard', "dog", "bark")
const cat = new Animal('Bangla Bilai', "cat", "Mew Mew!")
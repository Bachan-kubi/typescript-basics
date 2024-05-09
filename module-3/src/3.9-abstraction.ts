{
    // abstraction oop 1. interface 2. abstract
    // Generat Idea
    interface Vehicle{
        startEngine(): void;
        stopEngine():void;
        moveCar(): void;
        test(): void;
    }
    // real implementations

    class Car implements Vehicle{
        startEngine(): void {
            console.log(`Engine started`)
        }
        stopEngine(): void {
            console.log(`stop`)
        }
        moveCar(): void {
            console.log(`Car is moving!`)
        }
        test(): void {
            console.log(`my car is testing! `)
        }
    }

    const hondaCar = new Car();
    hondaCar.stopEngine();

    abstract class Car2{
        abstract startEngine(): void;
        abstract stopEngine():void;
        abstract moveCar(): void;
        test(): void{
            console.log(`car is testing by me!`)
        };
    }
    class Honda extends Car2{
        startEngine(): void {
            console.log(`started`)
        }
        stopEngine(): void {
            console.log('engine stop')
        }
        moveCar(): void {
            console.log('moved')
        }
    }
    const me = new Honda();







}
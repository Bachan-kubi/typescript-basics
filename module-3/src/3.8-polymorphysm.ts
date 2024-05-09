{
    // polymorphysm
    class Person{
        getSleep(){
            console.log(`i sleep 8 hours!`)
        }
    }

    class Student extends Person{
        getSleep() {
            console.log('12 hours')
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log('i sleep 5 hrs!')
        }
    }

    const getSleepHour = (param: Person)=>{
        return param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepHour(person3);



}
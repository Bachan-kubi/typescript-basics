{
    // we can use keyof operator to form a union type get types 

    type Vehicle = {
        bike: string;
        car: string;
        boat:string;
    }

    type Owner = "bike" | "car" | "boat" // mannually added

    type Owner2 = keyof Vehicle;

    const person1 : Owner2="bike";

    // get property value 

    const getPropKey = <X, Y extends keyof X>(obj: X, key:Y)=>{
        return obj[key];
    }
    const user = {name: 'i', kam: "ai", dam: "ai"}
    const car = {name: 'toyota', model: "nai", dam: 255555}
    const resutl1 = getPropKey(user, "kam");
    const resutl2 = getPropKey(car, "model");

    



}
{// nullable/ never / unknown

const nullableValue = (value: string|null)=>{
    if(value){
        console.log('Searching')
    }else{
        console.log('There is nothing to search!!')
    }
}

nullableValue(null);
// unknown type
const unknown = (value: unknown)=>{
    if(typeof value=== "number"){
        const convertedValue = (value*1000)/3600;
        console.log(`Your speed is ${convertedValue} ms^-1`);
    }else if(typeof value === 'string'){
        const [result, unit] = value.split("");
        console.log(result)
        const convertedSpeed = (parseFloat(result)*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }else{
        console.log(`wrong input!`);
    }
}

unknown('45km');


// never 
const neverType = (msg: string): never=>{
    console.log(msg)
    throw new Error(msg)
}

neverType('r na!');



















}
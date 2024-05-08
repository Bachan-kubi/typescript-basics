{
    // type assertion 
    let anything: any;

    // anything = 'typescript is going so hard';

    // (anything as string)

    anything =222;

    (anything as number)

    const kgToKl=(value: string | number): number | string | undefined=>{
        if(typeof value === 'string'){
            const cv = parseFloat(value)*1000;
            return `your value is ${cv}`;
        } else if(typeof value === 'number'){
            return `value*1000`;
        } else{
            return; 
        }
    }

    const r2 = kgToKl(2) as number
    const r1 = kgToKl("jjj") as string


    type rr= {
        message: string;
    }
    try {
        
    } catch (err) {
        console.log((err as rr).message);
    }

}
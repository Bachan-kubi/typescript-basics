"use strict";
{
    // type assertion 
    let anything;
    // anything = 'typescript is going so hard';
    // (anything as string)
    anything = 222;
    anything;
    const kgToKl = (value) => {
        if (typeof value === 'string') {
            const cv = parseFloat(value) * 1000;
            return `your value is ${cv}`;
        }
        else if (typeof value === 'number') {
            return `value*1000`;
        }
        else {
            return;
        }
    };
    const r2 = kgToKl(2);
    const r1 = kgToKl("jjj");
    try {
    }
    catch (err) {
        console.log(err.message);
    }
}

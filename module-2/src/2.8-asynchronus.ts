{
// we have to create a promise 

const createPromise=(): Promise<string>=>{
    return new Promise((resolve, reject)=>{
        const data: string = "paisi";
        if(data){
            resolve(data)
        }else{
            reject('Fail to fetch data');
        }
    })
}


// now call create promoise 

const showData = async(): Promise<string> =>{
    const data:string = await createPromise();
    return data;
    console.log(data);
}

showData();





}
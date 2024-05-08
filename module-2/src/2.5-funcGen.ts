{
    // fucntion with generci

    // 01 normal practice

    const normalFunc = (param:string): string[]=>{
        return [param];
    } 

    const normal = normalFunc("ki je sikhi!");

    // function with generic structures 

    const funcWithGene = <T>(param:T): T[]=>{
        return [param];
    }

    const res = funcWithGene<string>("bangladesh");

    type GenId = {
        id: number;
        name: string;
    }
    const objeGen = funcWithGene<GenId>({id: 444, name: 'moti'});

    // widht tuple
    
    const creatArrTuple = <T,Q>(param1:T, param2:Q):[T,Q]=>{
        return [param1, param2];
    }

    const r = creatArrTuple<string, {name: string}>('bangladesh', {name: 'mal'});


    // another one 
    const addCourse = <T>(student:T)=>{
        const newCourse = 'Next level Development Course!!';
        return {
            ...student, newCourse
        };
    }

    const student1 = addCourse({name: 'ami', email: 'jani@gmail.com'});
    const student2 = addCourse({name: 'ki', email: 'pni@gmail.com', isLazy: true, iswatch: false});






















}
"use strict";
{
    // fucntion with generci
    // 01 normal practice
    const normalFunc = (param) => {
        return [param];
    };
    const normal = normalFunc("ki je sikhi!");
    // function with generic structures 
    const funcWithGene = (param) => {
        return [param];
    };
    const res = funcWithGene("bangladesh");
    const objeGen = funcWithGene({ id: 444, name: 'moti' });
    // widht tuple
    const creatArrTuple = (param1, param2) => {
        return [param1, param2];
    };
    const r = creatArrTuple('bangladesh', { name: 'mal' });
    // another one 
    const addCourse = (student) => {
        const newCourse = 'Next level Development Course!!';
        return Object.assign(Object.assign({}, student), { newCourse });
    };
    const student1 = addCourse({ name: 'ami', email: 'jani@gmail.com' });
    const student2 = addCourse({ name: 'ki', email: 'pni@gmail.com', isLazy: true, iswatch: false });
}

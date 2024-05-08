"use strict";
{
    // to force parameter to receive a fixed argurment to identify or confirmation. 
    const addCourse = (student) => {
        const newCourse = 'Next level Development Course!!';
        return Object.assign(Object.assign({}, student), { newCourse });
    };
    const student1 = addCourse({ id: 222, name: 'ami', email: 'jani@gmail.com' });
    const student2 = addCourse({ id: 333, name: 'ki', email: 'pni@gmail.com', isLazy: true, iswatch: false });
}

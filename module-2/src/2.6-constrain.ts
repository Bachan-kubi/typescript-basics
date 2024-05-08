{
// to force parameter to receive a fixed argurment to identify or confirmation. 
const addCourse = <T extends {
    id: number;
    name: string;
    email: string;}>(student:T)=>{
    const newCourse = 'Next level Development Course!!';
    return {
        ...student, newCourse
    };
}

const student1 = addCourse({id: 222, name: 'ami', email: 'jani@gmail.com'});
const student2 = addCourse({id: 333, name: 'ki', email: 'pni@gmail.com', isLazy: true, iswatch: false});




}
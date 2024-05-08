// type guard 

type Alphanumetic = string | number;


const add =(p: Alphanumetic, p1: Alphanumetic): Alphanumetic =>{
    if(typeof p === "number" && typeof p1==="number"){
return p+p1;
    }else{
        return p.toString()+ p1.toString();
    }
}

// in 
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: "admin";
}

const getUser = (user: NormalUser | AdminUser)=>{
    if('role' in user){
        console.log('admin user')
    } else{
        console.log('normal user')
    }
}

const normalUser = {
    name: 'Normal Vhai'
}
const adminUser = {
    name: 'admin Vhai',
    role: 'admin'
}

getUser(normalUser);
getUser(adminUser);
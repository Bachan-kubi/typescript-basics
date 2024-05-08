"use strict";
// type guard 
const add = (p, p1) => {
    if (typeof p === "number" && typeof p1 === "number") {
        return p + p1;
    }
    else {
        return p.toString() + p1.toString();
    }
};
const getUser = (user) => {
    if ('role' in user) {
        console.log('admin user');
    }
    else {
        console.log('normal user');
    }
};
const normalUser = {
    name: 'Normal Vhai'
};
const adminUser = {
    name: 'admin Vhai',
    role: 'admin'
};
getUser(normalUser);
getUser(adminUser);

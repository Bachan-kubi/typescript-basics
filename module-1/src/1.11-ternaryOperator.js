"use strict";
var _a, _b;
{
    // Ternary Operator|| optional chaining || nullish coulescing
    let age = 15;
    if (age < 15) {
        console.log('novice!');
    }
    else {
        console.log('adult!');
    }
    const newAge = age < 25 ? "GOOD" : "BAD";
    console.log(newAge);
    // nullshit coelescing opertor - decision based on null or undefined value;
    let isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const user = {
        name: 'kubi',
        age: 30,
        address: {
            parmanentAddress: "fokir",
            presentAddress: "jakir",
            contact: 123
        }
    };
    const newData = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : "nai";
    console.log(newData);
}

"use strict";
{
    // Object distructureing
    // Array Detructuring
    let person = {
        id: 2345,
        contactNo: 789456,
        name: {
            firstName: 'Bachan',
            middleName: "luci",
            lastName: "kubi"
        },
        address: {
            village: 'nalchapra',
            po: 'kalmakanda',
            dist: 'Netrakona'
        }
    };
    const { id, name: { middleName }, address: { po } } = person;
    // Array destructuring
    const girls = ['epa', 'shipu', 'shiba', 'putul', 'rima', 'rimi', 'ruma', 'smrity', 'hiya', 'doly', 'tim', 'ojana', 'lucky', 'alaka', 'tusty'];
    const [, , shiba, ...rest] = girls;
    const ourTuples = [false, 'nai', 85];
}

{
    // method-1
    type genericArr = Array<Boolean>
    // method-2
    type genericAr<T> = Array<T>
    // const user: Array<number> = [1,2,3];
    const user: genericAr<number> = [1,2,3];

    // const user2: Array<string> = ["ki","Fil", "u"];
    // const user2: genericArr = ["ki","Fil", "u"];
    const user2: genericAr<string> = ["ki","Fil", "u"];

    // const user3: genericArr = [true, false, false];
    const user3: genericAr<boolean> = [true, false, false];

const alu: genericAr<{name: string; age: number; role?: string}> = [
    {
        name: 'ami',
        age: 410
    }, 
    {
        name: 'tumi',
        age: 40
    }, 
    {
        name: 'se',
        age: 50
    }, 
]

// generic tuple

type genericTuple<X, Y, > = [X, Y, ];

let kk :genericTuple<string, string> = ['mr', 'miss'];

const userIsd: genericTuple<number, {name: string, email: string}> = [12345, {name: "adi", email: 'ku@gmail.com'}]


}
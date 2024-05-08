// Refference type data -- OBJECT

const userName: {
    readonly company: string; // Literal type- when value is fixed in type
    firstName: string;
    middleName?: string; // optional type ??.
    lastName: string;
    isMarried: boolean;
} = {
    company: 'felixIt',
    firstName: 'bachan',
    // middleName: 'hero',
    lastName: 'kubi',
    isMarried: true
}

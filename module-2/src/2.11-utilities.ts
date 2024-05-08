{
    // create type using utilities type

    type Person = {
        name: string;
        email: string;
        age: number;
        address: string;
    }
    // pick method
    type Person1 = Pick<Person, "name" | "age">;
    // omit method
    type Person2 = Omit<Person, "name"| "email">
    // type require
    type RequireType = Required<Person>
    type PartialType = Partial<Person>
    type ReadOnlyType = Readonly<Person>
    // record type
    type RecordType = Record<string, unknown>;

    const data: Record<string, unknown> = {
        name: 'ami',
        age: 25
    }
}
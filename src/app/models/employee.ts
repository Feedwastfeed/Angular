export class Employee {

    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
export class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    
}

// let's create an instance
// this will call the constructor
let myCustomer = new Customer("Martin", "Dixon");

// this will call the setters
myCustomer.firstName = "Susan"; 
myCustomer.lastName = "Public";

// this will call the getters
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

/*
In order to make sure that in case of any type error in your typescript file(s) the transpiler 
does not generate the javascript file(s), typescript has come up with a flag known as 
“noEmitOnError” as part of the “compilerOptions” in the tsconfig.json file !

If we set noEmitOnError: true in the tsconfig.json file then on compiling my typescript code 
in case of error the javascript will not be generated. Let’s see step by step how to achieve 
this in a sample typescript project.

tsc --noEmitOnError fileName.ts

*/

export {}
// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 22;

// isLoggedIn = 22;
isLoggedIn = true;

// arrays
let ninjas: string[];

// ninjas = [10,23];
ninjas = ['yoshi', 'mario'];


// union types
let mixed: (string|number|boolean)[] = [];
mixed.push(22);
mixed.push("hello");
mixed.push(false);

let uid: string|number;
uid = '132123';
uid = 22;


// objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi' , age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}


ninjaTwo = { name: 'mario', age: 22, beltColour: 'black' }
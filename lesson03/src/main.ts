let sringArry = ['one', 'cleo', 'Georgie']

let guitars = ['Strat', 'Les Paul',  5550]

let mixedData = ['EVH', 1999,  true]

let bands: string[] = [];
bands.push('Van han')

//Tuple
let myTuple: [string, number, boolean] = ['Cleo', 588, true]

let mixed = ['John', 1, false]

mixed = myTuple

// myTuple = mixed ❌ 
//this is because mixed is nt required to have 3 elements in the array(is optional) and typescript understands that their is a
//...posibility it may not have 3 elements and therefore you can't assign that to a tuple that strictly requires 3 elements(array of specific lenght)

myTuple[1] = 42

//objects 
let obj: Object
obj = []
console.log(typeof obj);

obj = bands
obj = {}

//infered object --in other words, typescript defines for us from what values we assign first
const exampleObj = {
    prop1: 'Cleo',
    prop2: true
}
exampleObj.prop1 = 'Joe' 

//but we can explicitly define our object as below

// type Guitarist = {
//     name: String,
//     active?: boolean, //can be optional
//     albums: (string | number)[] //array of mixed of numbers and string => union type
// }
//defining Object we can use keyword `type` but `interface` is prefered
interface Guitarist {
    name?: String,
    active?: boolean, //can be optional
    albums: (string | number)[] //array of mixed of numbers and string => union type
}
let evh: Guitarist = {
    name: 'Cleo',
    active: true,
    albums: [1984, 1550, 'cron']
}


let JP: Guitarist = {
    // name: 'Jimmy',
    albums: ['I', 'II', 1980]
} //this object can miss active because it's optional

//application
const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}! `
    }
    return 'Hello!'
}

console.log(greetGuitarist(JP));


//Enums
enum Grade {
    A = 1,
    B,
    C,
    D,
    E,
    F
}

console.log(Grade.F);

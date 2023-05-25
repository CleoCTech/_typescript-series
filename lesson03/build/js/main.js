"use strict";
let sringArry = ['one', 'cleo', 'Georgie'];
let guitars = ['Strat', 'Les Paul', 5550];
let mixedData = ['EVH', 1999, true];
let bands = [];
bands.push('Van han');
//Tuple
let myTuple = ['Cleo', 588, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed ❌ 
//this is because mixed is nt required to have 3 elements in the array(is optional) and typescript understands that their is a
//...posibility it may not have 3 elements and therefore you can't assign that to a tuple that strictly requires 3 elements(array of specific lenght)
myTuple[1] = 42;
//objects 
let obj;
obj = [];
console.log(typeof obj);
obj = bands;
obj = {};
//infered object --in other words, typescript defines for us from what values we assign first
const exampleObj = {
    prop1: 'Cleo',
    prop2: true
};
exampleObj.prop1 = 'Joe';
let evh = {
    name: 'Cleo',
    active: true,
    albums: [1984, 1550, 'cron']
};
let JP = {
    // name: 'Jimmy',
    albums: ['I', 'II', 1980]
}; //this object can miss active because it's optional
//application
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}! `;
    }
    return 'Hello!';
};
console.log(greetGuitarist(JP));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
    Grade[Grade["F"] = 6] = "F";
})(Grade || (Grade = {}));
console.log(Grade.F);

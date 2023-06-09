"use strict";
/**
 * ## Generic Types
 *
 * sometimes we don't know the types that will be passed into a function and therefore we call them generics
 * However, TypeScript does not support generic types.
 */
//this function is generic, since it doesn't strict on specic type like string or number. The return type can be of any type that will be passed into the function. 
const echo = (arg) => arg;
//generic types is useful especially in utility functions where we aren't sure what type we are going to pass in
//example 1:
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true));
console.log(isObj('Cleo'));
console.log(isObj([1, 2, 3, 4, 5]));
console.log(isObj({ name: 'Cleo' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(NaN));
console.log(isTrue(1));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3, 4, 5]));
console.log(isTrue({ name: 'Cleo' }));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Cleo' }));
// console.log(processUser({name:'Cleo'}));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
/**
 * In generic types, whenever you instatiate and object class, that accepts a parameter of type generic,
 * TypeScript will infer the type you pass in first i.e if it's a string it will infer that and our objct will be a string object in runtime
 * and that's why if you use the same object to pass another type like number, typescript will give an error.
 * To solve this, you can specify what type you want the object to be on runtime and it will be. Example myState object
 */
const store = new StateObject('Cleo');
console.log(store.state);
store.state = "Dave";
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Cleo', 42, true]);
console.log(myState.state);

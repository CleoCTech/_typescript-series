//type aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: String,
    active?: boolean, //can be optional
    albums: stringOrNumberArray //array of mixed of numbers and string => union type
}

type UserId = stringOrNumber

// Literal types
let myName: 'Cleo'

let userName: 'Dave' | 'Cleo' | 'Ken'

userName = 'Ken'

//functions
const add = (a: number, b: number) : number => {
    return a + b
}

const logMsg = (message: any) : void => {
    console.log(message);
    
}
logMsg('Hello!');
logMsg(add(2,6));

let subtract = function (c:number, d:number): 
number {
    return c - d
}

type mathFunction = (a: number, b: number) => number 

// interface mathFunction {
//     (a: number, b: number): number 
// }


let multiply: mathFunction = function(a, b) {
    return a*b
}

logMsg(multiply(53,10))

// optional parameters =>NB. Optional params should come to the end of the list

const addAll = (a: number, b: number, c?: number):
number => {
    if (typeof c!=='undefined') {
        return a + b + c
    }
    return a + b 
}
//default param value of c if not passed by the user of this function. NB. Optional params should come to the end of the list
const sumAll = (a: number, b: number, c: number = 2):
number => {
    return a + b + c
}

logMsg(addAll(2,4,5))
logMsg(addAll(2,4))
logMsg(sumAll(2,4))

//default param values
const sumAll2 = (a: number = 10, b: number, c: number = 2):
number => {
    return a + b + c
}

logMsg(sumAll2(undefined,4))

//Rest Parameters => should come also at the end after the required parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce( (prev, curr) => prev +curr )
}
logMsg(total(10, 5, 9))

//never type
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}
//it's useful when you have for example an endless loop
const infinite = () => {
    let i: number =1
    //this is and endless loop an we wouldn't wnat this, so if typescript infers this method as `never`, make sure you throw an error
    while (true) {
        i++
        //to solve endless loop, we add the line below to break from the loop and typescript will no longer infer this method as `never` rather `void` method it will be
        if (i > 100) break
    }

}

// custom guard
const isNumber = (k: any): boolean => {
    return typeof k === 'number' 
        ? true : false
}
// use of never type
const numberOrString = (k: number | string): 
string => {
    if(typeof k === 'string') return 'string'
    if(isNumber(k)) return 'number'
    return createError('This should never happen')
}
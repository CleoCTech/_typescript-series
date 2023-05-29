type One = string
type Two = string | number
type Three =  'hello'

// convert to more less or specific
// let a: One = 'hello'
let a = <One>'hello'
let b = a as Two // less specific type
let k = <Two> a
let c = a as Three //more specific - bcoz, a is equal to 'hello' (line 6) and that is a literal for type Three
let q = <Three> a

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): 
number | string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// Be careful! TS sees no problem but string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// let's say if you intentionally want to convert 10 as a string, typescript will not allow but it gives an option using keyword `unknown` to a value yo want to convert to string

// 10 as string 
(10 as unknown) as string

//Application of using unknown
//The DOM
// const myImg = document.getElementById('#img') as HTMLImageElement
const myImg = <HTMLImageElement>document.getElementById('#img')
const img = document.querySelector('img')!

myImg.src //ts complains here that myImg can be possibly null and can be possibly not be a img element. but we can force it to accept it because we know we have img element in our web page. we will do that by asserting/casting our myImg as HTMLImageElement- which will tae of both null problem an element type problem
img.src //ts complains here that img can be possibly null, but at least ts is aware of querSelector is more specific to <img> element. We can use a non-null assertion to convience it that it's there.
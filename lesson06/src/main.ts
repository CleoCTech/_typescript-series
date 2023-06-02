class Coder {

    secondLang!: string

    constructor(
        public readonly name: string, 
        public music:string, 
        private age:number, 
        protected lang:string = 'TypeScript'
    ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){
        return `Hello, I'm ${this.age}`
    }
    
}
const Dave =  new Coder('Cleo', 'My Friend', 27)
console.log(Dave.name);
console.log(Dave.getAge);
// console.log(Dave.lang);
// console.log(Dave.age);


class webDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ){
        super(name, music, age)
        this.computer = computer    
    }

    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new webDev('Windows', 'Sara', 'Afrobeats', 24)
console.log(Sara.getLang());
////////////////////////////////////////////////////////////////////////////////

// implementing interface to class

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name:string
    instrument: string

    constructor(name: string, instrument:string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Paige =  new Guitarist('Paige', 'guitar')
console.log(Paige.play('strums'));

////////////////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public  id: number

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John  =  new Peeps('John')
const Jane  =  new Peeps('Jane')
const Jade  =  new Peeps('Jade')

console.log(John.id);
console.log(Jane.id);
console.log(Jade.id);

console.log(Peeps.count);

////////////////////////////////////////////////////////////////////////////////

//getters and setters
class Bands{
    private datastate: string[]

    constructor(){
        this.datastate = []
    }

    public get data(): string[] {
        return this.datastate
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.datastate = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands =  new Bands()
MyBands.data = ['Sauti Sol', 'Elani', 'WestLife']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data);
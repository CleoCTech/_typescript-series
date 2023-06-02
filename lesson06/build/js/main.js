"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Cleo', 'My Friend', 27);
console.log(Dave.name);
console.log(Dave.getAge);
// console.log(Dave.lang);
// console.log(Dave.age);
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Windows', 'Sara', 'Afrobeats', 24);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Paige = new Guitarist('Paige', 'guitar');
console.log(Paige.play('strums'));
////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Jane = new Peeps('Jane');
const Jade = new Peeps('Jade');
console.log(John.id);
console.log(Jane.id);
console.log(Jade.id);
console.log(Peeps.count);
////////////////////////////////////////////////////////////////////////////////
//getters and setters
class Bands {
    constructor() {
        this.datastate = [];
    }
    get data() {
        return this.datastate;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.datastate = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Sauti Sol', 'Elani', 'WestLife'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);

// Module Wrapper Function
// Isto é tudo aquilo que criamos e está envolvido dentro desta função 

/* (function(exports, require, module, __filename, __dirname){

}) */




class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My is ${this.name} and I am ${this.age}`);
    }
}
module.exports = Person;
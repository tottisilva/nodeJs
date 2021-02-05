const person = {
    name: 'José',
    age: 30
}

// Para usar este objeto em outro lugar usamos
module.exports = person;

/*
const person = require('./person');
const Person = require('./classPerson');

// Para class temos que faz o instantiate
const person1 = new Person('Jonh Doe', 30);
const person2 = new Person('Jan Doe', 29);
const person3 = new Person('Jose Doe', 28);

person1.greeting();



console.log(person);
*/
{
 //block Scope
}

if (true) {
    //block Scope
}

for (let i = 1; i <= 10; i++) {
    // Block Scope
}

function sum(a,b) {
    //function scope
    var result = a + b;
}

sum(4 + 3);

//Scalar values
const answer = 42;
const greeting = 'Hello';

//Arrays and Objects
const numbers = [2, 4, 6];
const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const answer1 = 42;

/* A big program here... */

answer1; //is still 42

//vs

/*a big program here*/

const X = function () {
    //"this" here is the caller of X
};

const Y = () => {
    //"this here is NOT the caller of Y
    
    //Its the same "this" found in Y's scope
};

/*

Regular functions give access to their "calling" environment while 
arrow functions give access to their "defining" environment

The value of the "this" keywod inside a regular function 
depends on HOW the function was CALLED (the OBJECT that made the call).

The value of the "this" keyword inside an arrow function 
depends on WHERE the function was DEFINED (the SCOPE that defined the function).

*/

//console.log(this);

const testerobj = {
    func1: function() {
        console.log('func1', this);
    },

    func2: () => {
        console.log('func2', this);
    },
};

testerobj.func1();
testerobj.func2();

/* 
    const obj = {
     key: value
    };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mystery]: 42,
    InverseOfPI,
};

console.log(obj.answer);

/*DESTRUCTURING*/

//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2} = Math;

//Somewhere in a React App
//const {Component, Fragment, useState} = require('react');
//useState();

const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({radius}, {precision = 2} = {}) =>
    (PI * radius * radius).toFixed(precision);

console.log(
    circleArea(circle, { precision: 5})
);

const [first, second, , forth] = [10, 20, 30, 40];

//const [First, ...restOfItems] = [10, 20, 30, 40];

//const console.log(first);
//const console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const newArray = [...restOfItems];

const newOject = {
    ...person

};

//TEMPLATE STRINGS

const greeting = "Hello World";

const answer = 'Forty Two';


//CLASS TEMPLATE
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello ${this.name}!');
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log('Hell ${this.name} from ${this.level}');
    }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
03.greet = () => console.log('I am special!');

01.greet();
02.greet();
03.greet();

//ASYC OPERATIONS to return PROMISE

//const fetchData = () => {
//    fetch('https://api.github.com').then(resp => {
//       resp.json().then(data => {
//            console.log(data)
//        });
//    });
//};

fetchData = async() => {
    const resp = await fetch('https://api.github.com');

    const data = await resp.json();

    console.log(data);
};

fetchData();
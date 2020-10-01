"use strict";

// Spread Operator

// Pass elements of an array as arguments to a function
function addNumbers(a, b, c) {
    console.log(a + b + c);
}  

const nums = [2, 6, 6];
addNumbers(...nums);

// Adderara innehållet i en array till en annan
let cars = ['opel', 'saab'];
let cars2 = ['volvo', ...cars, 'Wolkswagen', 'Audi'];
console.log(cars2);

// Kopiera arrayer

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr2);

// Slå ihop, concatenate arrays
let arr3 = [1, 5, 7];
let arr4 = [2, 3, 6];
let arr5 = [...arr3, ...arr4];
console.log(arr5);

/* Destruction 
Att ta ett objekt eller en array och göra mindre objekt eller arayer av dem.

Man tar arrayen man vill destructa och sätter på höger sida
*/

const alphabet = ['a', 'b', 'c', 'd', 'f'];
const numbers = ['1', '2', '3'];
//const a = alphabet[0];
//const b = alphabet[1];
const [a,, c, ...rest] = alphabet;
console.log(a);
console.log(c);
console.log(rest);

//slå ihop arrayer:
const newArr = [...alphabet, ...numbers];
console.log(newArr);


// destructing objekt

const person = {
    name: 'Sally',
    age: 32, 
    address: {
        city: 'Östersund',
        state: 'Jämtland'
    }
}

const person2 = {
    address: {
        city: 'Stockholm',
        state: '08'
    }
}


const {name:firstname, address:{city} } = person;
console.log(firstname);
console.log(city);

// slå ihop objekt, den sista skriver över den först om det är samma element
const person3 = {...person, ...person2};
console.log(person3);

function printUser({ name, age, favoriteFood = "blueberry"}) {
    console.log(`Name is: ${name} and age is ${age}. I like ${favoriteFood}`)
}


printUser(person);
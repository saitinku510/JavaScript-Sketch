// alert("Hello World");
// console.log("Hello Worldd ");
// console.error('error msg');
// console.warn('This is a warning');

//Var, Let, Const
// let age = 30;
// age = 21; //let can be changed
// const age1 = 22; // const is constant cannot be changed
// console.log(age);
// console.log(age1);

//String, Number, Boolean, Null, Undefined, Symbol
// const name = 'babu';
// const age = 22;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);


// //Concatination
// const name = 'babu';
// const age = 22;
// console.log('My name is ' + name + ' & my age is ' + age);
// //Template String the other method of concatination
// const details = `My name is ${name} & age is ${age}`
// console.log(details);

// // const s = "hello world";
// const s = "hello world, cars, tinku";
// // console.log(s.substring(0, 4).toUpperCase());
// console.log(s.split(', ')) //It Splits all the letters

//Arrays - Variables that hold multiple values
// const number = new Array(1,2,3,4,5,6,7);
// console.log(number);

// const fruits = ['apple', 'banana', 'oranges', 'pears', 13, true];
// fruits[6] = 'grapes'; //To add in the particular postion in the array it overwrites
// fruits.push('mango');   //To add to the end of the array
// fruits.unshift('kiwis'); //To add to the begining of the array
// fruits.pop(); //It'll remove the last one in the array
// // console.log(Array.isArray(fruits)); //this is will show whether it is an array or no
// console.log(fruits.indexOf('oranges'));  //This will show the index position of the element in the Array
// console.log(fruits);


// Array and calling array
// const person = {
//     firstName : 'marri',
//     lastName : 'Babu',
//     age : 25,
//     gende : 'male',
//     hobbies : ['sleep', 'eat', 'repeat'],
//     address: {
//         street : 'uppal',
//         city: 'Hyderabad',
//         pin : 500027,
//         state : 'telangana'
//     }
// }
// person.email = 'babu@gmail.com'; //can add more proprties like this
// console.log(person)
// console.log(person.firstName, person.lastName, person.hobbies[0], person.address.city); //this is to call specific details

//Array & object in array & Json
// const todos = [ //this is array
//     { // this is object
//         id : 1,
//         text : 'Text out trash',
//         isCompleted : true
//     },
//     { // this is object
//         id : 2,
//         text : 'meet in trash',
//         isCompleted : false
//     },
//     { // this is object
//         id : 3,
//         text : 'appointment for me',
//         isCompleted : true
//     }
// ];
// console.log(todos[2].text);
// const todoJson = JSON.stringify(todos);
// console.log(todoJson);

//For Loop
// for(let i = 0; i <= 10; i++) {
//     console.log(`For loop Number: ${i}`);
// }

// for(let i = 0; i <= todos.length; i++) {
//     // console.log(`For loop Number: ${i}`);
//     console.log(todos[i].text);
// }
// for(let todo of todos) {
//     console.log(todo.text);
// }

// While Loop
// let i = 0;
// while(i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

//For Each, map, filter
// const todos = [ //this is array
//     { // this is object
//         id : 1,
//         text : 'Text out trash',
//         isCompleted : true
//     },
//     { // this is object
//         id : 2,
//         text : 'meet in trash',
//         isCompleted : false
//     },
//     { // this is object
//         id : 3,
//         text : 'appointment for me',
//         isCompleted : true
//     },
//     { // this is object
//         id : 4,
//         text : 'appointment for me to other',
//         isCompleted : false
//     }
// ];
// // // For each function
// // todos.forEach(function(todo) {
// //     console.log(todo.isCompleted);
// // });

// // // Map is to get  the full data
// // const todoText = todos.map(function(todo) {
// //     return todo.text;
// // });
// // console.log(todoText);

// // Filter is to filter out
// const todoCompleted = todos.filter(function(todo) {
//     // return todo.id === 2; 
//     return todo.isCompleted === true; 
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted);


// Comparision using if, else, else if.
//// comparing only one variable
// const x = 11; 
// if(x === 10) {
//     console.log('x is 10');
// } else if(x > 10) {
//     console.log('x is greater than 10');
// }else {
//     console.log('x is less than 10')
// }

//comparing two statements using &&, ||
const x = 5;
const y = 10;
// using And both should be true to execute
if(x > 3 && y > 1) {
    console.log('x is more than 5 OR y is more than 10');
} 
//using or anyone should be true so it executes
if(x > 5 || y > 10) {
    console.log('x is more than 5 OR y is more than 10');
} 
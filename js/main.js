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
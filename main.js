//var Globle Scope
//let,const block level scope

//let
/*
let age; 
age = 50;
age = 40
console.log(age);*/

//Const
/*
const age = 30;
console.log(age);
*/

//String,Numbers,Boolean,null,Undefined

/*
const name = 'Pawan';
const age = 30;
const rating = 4.5;
const isCool = true;
const x= null;
const y = undefined;
let z;
console.log(typeof z);
*/

const name = 'Pawan';
const age = 30;

//Concatenation
console.log(`My name is ${name} and I am ${age}`);
//Templete String
const hello = `My name is ${name}  and I am ${age}`;
console.log(hello);

const s = 'hello World!';
console.log(s.length);
console.log(s.toLocaleLowerCase());
console.log(s.substring(0,5).toLocaleUpperCase());
console.log(s.split(''));

const s1 = 'techmology,computers,it,code';

console.log(s1.split(','));

//Arrays - variables that hold multile values

// const numbers = new Array(1,2,3,4,5,);
// console.log(numbers);

//another way
const fruits = ['apples','oranges','peers'];
//console.log(fruits);

//add at known index
fruits[3] = 'graps';

//add at last index
fruits.push('mangos');

//add at first index
fruits.unshift('strawbarries');

//print spacific index
console.log(fruits[1]);

//remove last index
fruits.pop();
fruits.pop();

//check is array
console.log(Array.isArray(fruits));

//check element
console.log(Array.isArray('strawbarries'));

//idx of element
console.log(fruits.indexOf('oranges'));

console.log(fruits);


//Object literals
const preson = {
    firstname: 'john',
    lastName: 'Doe',
    age:30,
    hobbies:['music','movies'],
    address: {
        street: '50 main st',
        city: 'mandsaur',
        state: 'MA'
    }
}
//const { firstname,lastName,address:{city} } = preson;
//console.log(city);
//console.log(preson.address.city);
//console.log(preson.hobbies[1]);
//console.log(preson.firstname,preson.lastName);

preson.email = "pawandhangar@gamail.com";
console.log(preson);


//Arrays with const
const todos= [  
    {
      id : 1,
      text:'take out trash',
      isCompleted: true  
    },
    {
        id : 2,
        text:'Meeting with bose',
        isCompleted: true  
      },
      {
        id : 3,
        text:'Dentist appt',
        isCompleted: false  
      }
];

console.log(todos[1].text);

//JSON formate to  send to server
const todoJSO = JSON.stringify(todos);
console.log(todoJSO);

//For loop
for(let i=0;i<10;i++){
console.log(`For loop Number ${i}`);
}



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
const age= 30;
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
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// //For loop
// for(let i=0;i<10;i++){
// console.log(`For loop Number ${i}`);
// }

// //While
// let i =0;
// while(i<10){
//   console.log( `while Loop Numbers: ${i}`);
//   i++;
// }

// //For loop through an array
// for(let i=0;i<todos.length;i++){
// console.log(todos[i].text);
// }

//Another way
// for(let todo of todos){
// console.log(todo.text);
// }

//forEach,map ,filter

//forEach
// todos.forEach(function(todo){
// console.log(todo.text);
// });
//ForEach
todos.forEach((todo)=>console.log(todo));
//Map

// const todoText = todos.map(function(todo){
//   return todo.text;
//   });
//   console.log(todoText);

//filter
// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
//   }).map(function(todo){
//     return todo.text;
//   })
//   console.log(todoCompleted);

//Conditionals

// const x=20;
// if(x===10){
//   console.log('x is 10');
// }else if(x>10){
//   console.log('x is grater than 10');
// }
// else{
//   console.log('x is less than 10');
// }

//many variable
// const x=4;
// const y =10
// if(x>5 || y>=10){
//   console.log('x is mor than 5 or y is more than 10');
//  }

//Ternary Operator
// const x = 11;
// const color =x>10? 'red':'blue';
// //console.log(color);

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');  
//     break;
//   default:  
//      console.log('color is not blue or red'); 
//      break; 
// }

//Functions
function addNums(num1=1,num2=1){
  return num1+num2;
}
console.log(addNums(5,5));

//Arrow
const addNums2=(num1=1,num2=1)=>console.log( num1+num2);

addNums2(5,5);

//Simple one line
const addNums3=(num1=1,num2=1)=>(num1+num2);

console.log(addNums3(5,4))
//addNums3(5,5);


//One Parameter
const addNums4=num1=>num1+5;
console.log(addNums4(5));

//OOps
//Constructor function
function Person(firstname,lastname,dob){
  this.firstname = firstname;
  this.lastName = lastname;
  this.dob = new Date(dob);
  // this.getBirthyear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function(){
  //   return `${this.firstname} ${this.lastName}`;
  // }
  
  //Prototype
// Person.prototype.getBirthyear = function(){
//   return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//   return `${this.firstname} ${this.lastName}`;
// }
}

//Initiate Object
//const Person1 = new Person('John','Doe','4-03-2004');
//const Person2 = new Person('John','Doe','4-03-2003');

// console.log(Person1);
// console.log(Person1.getBirthyear());

// console.log(Person2.dob.getFullYear());
// console.log(Person1.getFullName());

//Class
class Person5{
  constructor(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastName = lastname;
    this.dob = new Date(dob);
}
 getBirthyear(){
  return this.dob.getFullYear();
 }

getFullName(){
  return `${this.firstname} ${this.lastName}`;
}
}

//Initiate Object
const Person1 = new Person5('John','Doe','4-03-2004');
const Person2 = new Person5('John','Doe','4-03-2003');

console.log(Person2.getBirthyear());
console.log(Person1.getFullName());
console.log(Person1);

//DOM

//console.log(window);
//window.alert(10);

//Single Element Selector
//console.log(document.getElementById('my-form'));

// const form =document.getElementById('my-form');
// console.log(form);

//console.log(document.querySelector('h1'));

//multiple element Selector
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('li'))

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//Manipulating In DOM

 const ul = document.querySelector('.items');
 //ul.remove();
//ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML= '<h4>Hello</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

const taxt = document.querySelector('header');

//taxt.style.textAlign ='left';
taxt.style.color ='blue';

const btn1 = document.querySelector('.btn');

btn1.addEventListener('mouseout',(e) =>{
  e.preventDefault();
  // console.log('click');
  console.log(e.target.className);
  const id = document.querySelector('#my-form');
  id.style.background = '#ccc';

  document.querySelector('body').classList.add('bg-dark');
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello<h1>';
});


const myForm = document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();
  console.log(nameInput.value);
  console.log(emailInput.value);

  if(nameInput.value==='' || emailInput.value===''){
    msg.classList.add('error');
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(),3000);
  }
  else{
   // console.log('success');
   const li= document.createElement('li');
   li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

   userList.appendChild(li);

   //Clear fileds

   nameInput.value='';
   emailInput.value='';

  }
}
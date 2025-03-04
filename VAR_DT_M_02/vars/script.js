// ways to declare variables : var/let/const
// Naming conventions :
// Letters,numbers,underscore,$(dollar sign)
// Cant start with a no

let firstName = "neha";
let LastName = "umebe";
console.log(firstName, LastName);
let age=20; //initializing variables example

console.log(age);

//multi word formatting
//firstName =camelcase 
// first_name=underscore 
// FirstName=Pascal case
//firstname = lower case

//reassigning variables 
age =31;
console.log(age);


let score;
score =9;
if(true){
    score += 1; //score =score +1
}

console.log(score);

const o = 100;
//o =1000;//constants values cannot be changed
console.log(o);

//const poppy; //constants cant be done like this but need to be initialised as above

const arr = [1, 2, 3];
arr.push(5); //array
console.log(arr);

const person = {
    name : "neha", //object
};

person.name = 'nehaaa';
person.email = 'test@gmail.com';
console.log(person);

//declaring multiple values

let a,b,c;
const x=0, j=9,k=8;
console.log(k);
console.log(a);
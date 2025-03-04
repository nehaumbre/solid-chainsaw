//DataTypes
/** 
 * Strings : Sequence of characters inside "" /''/ backticks   
 * Numbers : Integers, floating point numbers
 * Boolean : true/false 0/1
 * Null :Intentional absence of any objevt value
 * Undefined : a variable that has not been yet defined/ assigned any value
 * Symbol : Built in object whose constructor returns a unique symbol 
 * BigInt :Numbers greater than 'Number' Type can handle
 * 
 * **/
//Reference types /objects
//they are non primitive value
//when assigned to a variable, this variable is given a reference to that value
//object literals , arrays and fuctions are all reference types

/*Static v/s Dynamic Types
-JS is dynamically typed language (we do not explicitly define types for our variables)
-ex of statically typed languages: C C++ Java
Typescript is superset of JS which allows static typing making code verbose and less prone to errors 

*/

//strings
const name1 = '2s';
console.log(name1, typeof name1);

const name2 = name1
console.log(name2, typeof name2);
//number
const n = 2;
console.log(n, typeof n);
//decimal no
const y = 23.4;
console.log(y, typeof y);
//Boolean
const hasFruit = true;
console.log(hasFruit, typeof hasFruit);
//null
const aptno = null
console.log(aptno, typeof aptno);//returns type as object
//undefined //let score;
const score = undefined;
console.log(score, typeof score);
//Symbol
const id = Symbol('id');
console.log(Symbol, typeof Symbol);
//bigint
const i = 78676768689889n;
console.log(i, typeof i);

//console---> output
// 2s string
// script.js:29 2s string
// script.js:32 2 'number'
// script.js:35 23.4 'number'
// script.js:38 true 'boolean'
// script.js:41 null 'object'
// undefined 'undefined'
// script.js:47 ƒ Symbol() { [native code] } 'function'
// script.js:50 78676768689889n 'bigint'


// ========================Reference Types
//arrays
const nos =[1, 2, 3, 4];
console.log(nos, typeof nos);
//object literals
const person = {name :'nej'};
console.log(person, typeof person);
//functions
function roof() {
    console.log('first');
}
console.log(roof, typeof roof);
//console output
// (4) [1, 2, 3, 4] 'object'
// script.js:70 {name: 'nej'} 'object'
// script.js:75 ƒ roof() {
//     console.log('first');
// } 'function'
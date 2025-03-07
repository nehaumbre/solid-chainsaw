//Type Conversions
//Change string to number
let no = '9.6'
no = parseInt(no);
// no= +no
// no=Number(no);
//no=parseFloat(no);
console.log(no, typeof no)

//Change number to string
let number = 10;
// number=number.toString();
number=String(number);
console.log(number, typeof number);

amount = 0//Output: 0=>false 1=>true
amount = Boolean(amount);
console.log(amount, typeof amount);

//String to no:if we parseint a string 'abc' we get NaN(Not a number) in output in console
//few more examples of Output: NaN
console.log(Math.sqrt(-1)); 
console.log(1+NaN);
console.log(undefined+undefined);
console.log("first"/3);
// =====================================================================
// Operators
// arithmetic [+(add) -(subtract) *(multiply) /(divide) %(mod) **(exponential)]
let x =3**3; //op=>27
console.log(x);
//Concatination

let r, e;
r = 'Hello' + " " + 'world';
e = "solve";
console.log(r + " " + e);

//  comparison, 
// logical, and 
// assignment operators

// ===============================================================================
// Type Coercion
//Working with Strings
// Capitalize Challenge
// Working with Numbers
// The Math Object
// Number Challenge
// Dates and Times
// Date Methods and DateTimeFormat API

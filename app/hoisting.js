//variable accessible/usable in the code before they are actually declared.
//let and const are not hoisted they move to temporal dead zone.
//initial value of var will be undefined
//function expression and arrow function depend on in which type of variable they are stored.

console.log(myName);
var myName = 10;

/*
//temporal dead zone - TDZ

const yourName = 'amru'

if (yourName === 'amru') {
    console.log(`Jonas has a job ${job}`)
    const age = 2037 - 1998;
    console.log(age);
    //above this line all code are in dead zone for job variable
    const job = 'engineer'; // will get uncaught reference error
    console.log(x)
}
*/


// console,log(job) // reference error
// console.log(year) //reference error
let job = 'teacher';
const year = 2023;


// hoisting for function

console.log(addDel(2, 5))
// console.log(fExp(2, 3)) error
// console.log(arrow(1, 3)) 

function addDel(a, b) {
    return a + b;
}

const fExp = function(a, b) {
    return a + b;
}

let arrow = (a, b) => a + b;

// e.g

if(!product) { 
    deleteShoppingCart() // will execute if block
}

var product = 10;// due to hoisting it will undefined

function deleteShoppingCart() {
    console.log('all product are deleted')
}
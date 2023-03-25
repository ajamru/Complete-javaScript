//Type coercion
/*
console.log('23' + 23)  //2323
console.log('23' + 12 - 2) //2310

let n = '1' + 1
n = n - 1
console.log(n) //10

console.log('10'-'4'-'3'-2 + '5') //15

// string literals 

let myName = "Amrutanshu"
let age  = 20

console.log(`My name is ${myName} and my age is ${age}`)
*/
// truthy and falsy values

// 5 falsy value = 0, '', undefined, null, NaN
/*
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('')) // false
console.log(Boolean({})) // empty object false
*/
/*
const money = 0;
// here money converted to boolean by default..
if(money) { // returning false as 0 is falsy value
    console.log("Don't Spend Money")
} else {// executed this one
    console.log("get money first")
}
*/
/*
let defined;

if(defined) { // variable is declared not given any value so it is undefined
    console.log("height is defined")
} else {//as undefined is falsy value it will execute this block
    console.log("please define the height")
}

console.log(typeof null) //object bug in js
*/


// Equality operator == and ===
 // == means value is same 
 //=== means value and datatype is same
const myAge = 18
if(myAge == '18'){
    console.log(equal)
}

if(myAge === '18') {
   console.log("false")
} else {
    console.log("strict equal") // this one will execute
}


// taking user input

const userInput = Number(prompt("enter a number")) // data type of userInput is number now
const userInput2 = prompt("enter a number") // data type of userInput is String now 
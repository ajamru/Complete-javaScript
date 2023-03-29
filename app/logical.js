"use strict"; //avoiding any unnecessary error
/*
let hasDriversLicense = false
let passTest = true
if(passTest) {
    hasDriverLicense =true // will show error as varibale is not declared bcz we used some error  missing s from variable
}
*/

// logical and  &&   logical or  ||   not !

console.log(true && true) //true
console.log(true || false) // true
console.log(!true) // false


// coding challenge

//dolphin score
const angDolphin = (86 + 108 + 89)/3;
const avgKoals = (88 + 91 + 110)/3;

/*
if (angDolphin > avgKoals) {
    console.log("dolphin wins")
} else {
    console.log("Koalas wins")
}
*/
/*
if((angDolphin > avgKoals) && (angDolphin >= 100)) {
    console.log("dolphin win the challange")
} else if((avgKoals > angDolphin) && (avgKoals >= 100)) {
    console.log("koalas wins")
} else if((angDolphin === avgKoals) && avgKoals === 100 && angDolphin === 100) {
    console.log("drow")
} else { 
    console.log("No one won the trophy")
}
*/

//switch statement

const eachDay = 'Monday';

switch(eachDay) {  // it compare strictly ===
    case 'Monday':
        console.log("Hey make your study plan")
        break

    case 'TuesDay':
        console.log("Go To office")
        break
    case 'WednesDay':
    case 'ThursDay':
        console.log("Do WFH") // this ne will work for both wednessDay and ThursDay
        break
    case 'Friday':
        console.log("Do some GYM")
        break
    case 'SaturDay':
    case 'SunDay':
        console.log("enjoy your weekend")
    default:
        console.log("Not a valid Date")
}

// statement and Expression
//expression is a peice of things which produces a value  e.g 3 + 4
if(23 > 10) {
    const str = "23 is greater" // it is statement as str doesn't produce a value
}

/*
// in template literal js expect expression ${}

// ternary operation  condition ? true : false

const myMark = 90
myMark > 80 ? console.log("you are passing with grade A") : console.log("try again")

//using expression
const result = myMark > 80 ? "passed with A grade" : "Try next time for good mark"
console.log(result)

// we can use ternary operator in tamplate literal as it is a expression
const myValidAge = 18 
console.log(`i like to drink ${myValidAge > 18 ? 'wine' : 'water'}`)

*/

// ternary challange

const billValue = 60
let tip

if(billValue >= 50 && billValue <= 300) {
   tip = (billValue * 15) / 100 
} else {
   tip = (billValue * 20) / 100
}

console.log(tip)

//using ternary
const tipValue = billValue >= 50 && billValue <= 300 ? (billValue * 15) / 100 : (billValue * 20) / 100
const finalValue = billValue + tipValue

console.log(`The bill was : (${billValue}), the tip is : (${tipValue}), and the final bill is : (${finalValue})`)

//converting string to number
const str = "12"
console.log(+str) // it will give number

//converting number to string
const num = 12
console.log(num + " ") //it will give string



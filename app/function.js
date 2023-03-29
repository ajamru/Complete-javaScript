function logger() {
    console.log("i am a function")
}

//function invocation/calling/running
logger();

//function taking parameter
function sumOfTwoNumber(param1, param2) {
    return param1 + param2
}

//console.log(sumOfTwoNumber(12, 30))
const value = sumOfTwoNumber(30, 40)
console.log(value)

// function declaration vs expression

//declearation -- we can call these function before its declearation
function calcAge(birthYear) {
    const age = 2023 - birthYear
    return age
}

const calcAge1 = calcAge(1998)
console.log(calcAge1)

//function expression/ annonymous function -- we can't call these function before its declearation

const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(1998)
console.log(age2)



// arrow function
const multiplyNumber = (num1, num2) => {
    return num1 * num2
}
console.log(multiplyNumber(10, 2))

// function calling function
function cutFruits(fruit) {
    return fruit * 4
}

function juice(apple, orange) {
    const applePiece = cutFruits(apple)
    const orangePiece = cutFruits(orange)
    const juice = `juice with ${applePiece} apples and ${orangePiece} oranges`
    return juice
}

console.log(juice(5, 2))
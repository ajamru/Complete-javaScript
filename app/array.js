//array
const friend = ['michel', 'peter', 'donChande']
console.log(friend)

//approach-2
const year = new Array(1990, 2032, 2030)
console.log(year)

// find element at any index
console.log(year[0])
console.log(year[1])

// length of array
console.log(friend.length)

//mutate array
friend[2] = 'hello'
console.log(friend)

//can contain values of different type
const firstName = 'amru'
const details = [firstName, "jena", 23, 65 - 23, friend]
console.log(details)


// exercise

function calcAge(birthYear){
    return 2050 - birthYear
}

const years = [2010, 1998, 2030]
console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]))
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(age)

// push - adds element at the end of the array
const aru = ['hello', 'world']
aru.push('js') //returns new length of the array
console.log(aru)

//unshift - add element in the begining of the array
aru.unshift('i am')
console.log(aru)

//pop - remove element from last of the array
const popped = aru.pop()
console.log(aru)
console.log(popped)// it will show removed element

//shift - remove element from begining of the array
aru.shift()
console.log(aru)

//indexof - element in which index
console.log(aru.lastIndexOf('hello'))

//includes - return true if element is in array or not
console.log(aru.includes('js')) // strict equality check
aru.push(23)
console.log(aru.includes('23'))//false

// we can store key: value pair
// {}
//order of the element is not necessary

const obj = {
    firstName : "amrutanshu",
    lastName : "Jena",
    job : "teacher",
    age : 12,
    friends : ['hell', 'js', 'steven']
}

// Retrive data from obj === we can do by dot notation and bracket notation

//dot notation
console.log(obj.firstName)

//bracket notation
console.log(obj['firstName'])
console.log(obj['age'])

// we can put any expression in bracket notation
const keyName = 'Name'
console.log(obj['first' + keyName]) //amrutanshu
//first it concatinate then it return the obj value
// this above things will not work in dot notation

/*
const choice = prompt("enter what you want to return")
//console.log(obj.choice) we can't get anything using dot operation from user input
//console.log(obj[choice])//but in bracket notation we can access */

// add element by dot notation and bracket notation

obj.location = "India"
obj['gmail'] = 'gmail.hotmail.com'

console.log(`${obj.firstName} has ${obj.friends.length} friends and his best friend is ${obj.friends[0]}`)
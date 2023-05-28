// pass by value
let age = 30
let oldAge = age
age = 31
console.log(oldAge)//30
console.log(age)//31


// bcz object is pass by reference  i.e use memory heap
const jonas = {
    name : 'jonas',
    age : 31
}

const friend = jonas
friend.age = 21
console.log('friend', friend)// age = 21
console.log('jonas', jonas)// age = 21


// copying objects

const jessica2 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bang']
}

const jessicaCopy = Object.assign({}, jessica2) // creating new objeect

jessicaCopy.lastName = 'Devis'

jessicaCopy.family.push('Marry')
jessicaCopy.family.push('John')
console.log(jessica2)
console.log(jessicaCopy)

// will keep running until the condition is true

for(let i = 0; i <= 10; i++) {
    console.log("hello")
}


// looping an  array

//simple for loop
const mark = [12, 43, 23, 98, 65]
// for(let i = 0; i < mark.length; i++){
//     console.log(mark[i])
// }

//pushing element in to an empty array
/*const types = []
for(let i = 0; i < mark.length; i++) {
    types.push(mark[i])
}
console.log(types)
*/
//break and continue
for(let i = 0; i < mark.length; i++){
    if(mark[i] >= 23)
    continue
    console.log(mark[i])
    // it will skip values which satisfy the condition
}

//for of - it will result elements in every index
// for(i of mark){
//     console.log(i)
// }

/*
//looping backword
const detail = [
    'Jonas',
    'jena',
    2037 - 1998,
    'teacher',
    ['michel', 'Peter', 'Steven']
]

for(let i = detail.length - 1; i >=0 ; i--) {
    console.log(i, detail[i])
}

//loop inside loop
for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`======= exercise is ${exercise}`)
    for(let rep = 1; rep <= 6; rep++){
        console.log(`Excersise ${exercise} : lifting weight rep ${rep}`)
    }
}
*/

//while loop

let x = 0;
while(x < 10) { 
    console.log('print me')
    x++
}

let role = Math.round(Math.random() * 6) + 1
let count = 0
while(role !== 6) {
    console.log(`number is ${role} role again`)
    count ++
}
console.log(`Total roll is ${count}`)
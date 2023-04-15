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
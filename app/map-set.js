'use strict'


// set -  there is no duplicate entries will be there and there is no indexes

/*
const orderSet = new Set(["pasta", "pizza", "resotto", "pizza", "pasta"]);
console.log(orderSet);
orderSet.add("Garlic bread");
orderSet.delete("resotto");
console.log(orderSet.size);
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

// const name1 = 'Hello';
// console.log(Array.from(name1)) // Making array from a string

console.log(new Set("Hello"));

// Map -- to map values to key and key can be any data type

const rest = new Map();
rest.set("name", "classico Italiano");
rest.set(1, "Italy");
console.log(rest);

// another way

rest.set(true, "Watata Badda")
  .set(false, "bagga Bada HO gaya")
  .set("close", 2);
console.log(rest);

console.log(rest.has('name'));
//rest.clear()

console.log(rest) */

const question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'c'],
    [2, 'java'],
    [3, 'Java script'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'try again']
]);

console.log(question);

// convert object to map
//const hourMap = new Map(Object.entries(Object))

// Making simple quiz app
console.log(question.get('question'))
for (const [key, values] of question) {
    if(typeof key === 'number') {
        console.log(`Answer ${key} : ${values}`)
    }

    //console.log(key, values);
}
// const Answer = Number(prompt("Enter your answer"));
// console.log(question.get((Answer === question.get('Correct'))));

// convert map to array
console.log(...question)






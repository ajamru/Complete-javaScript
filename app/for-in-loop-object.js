"use strict";

let obj = {
  name: "amru",
  age: 23,
  sex: "male",
};

for (const i in obj) {
  console.log(obj[i]);
}

// challange

const game = {
  team1: "BM",
  team2: "BVB",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Wutsel",
      "Hazard",
      "Xavi",
      "Garnacho",
      "Rodrigo",
    ],
  ],
  score: "4:0",
  scored: ["Lewandoski", "Gnarby", "Lewandoski", "Hummel"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const goalScored = game.scored;
// using for in loop
for (const goal in goalScored) {
  console.log(`Goal : ${+goal + 1} Scored by ${goalScored[goal]}`);
}

//using for of loop

for (const [i, value] of goalScored.entries()) {
  console.log(i, value);
}

//2
let avg = 0;
for (const num of Object.values(game.odds)) {
  avg += num;
}
avg /= Object.values(game.odds).length;
console.log(avg);

//3
for (const [team, odds] of Object.entries(game.odds)) {
  let str = team === "x" ? "drow" : `Victory ${game[team]}`;
  console.log(`The ${odds} ${str}`);
}

//for get the entris from an array you can get directly by array.entries()  and you will get key value pair
// e.g

const arr = ["name", "age", "sex"];
for (const item of arr.entries()) {
  console.log(item);
}

// for get the entries from an object we need to use OBject.entries(object)

//e.g
let newObj = {
  name: "hello",
  age: 23,
  sex: "male",
};

for (const ob of Object.entries(newObj)) {
  console.log(ob);
}

// set -  there is no duplicate entries will be there and there is no indexes

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

console.log(rest)
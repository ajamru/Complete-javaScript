'use strict';

const arr = [7, 8 , 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray)

const restaurant = {
    name: 'Classico Italine',
    location : 'fort street 31 disc dev',
    categories : ['Italian', 'Pizzaria', 'Vegiterian', 'Organic'],
    starterMenue: ['Focaccia', 'Bruschetta', 'Garlic', 'Caprese Salad'],
    mainMenue : ['Pizza', 'Pasta', 'Risseto'],

    openingHours : {
        thu : {
            open : 12,
            close: 22
        },
        fri : {
            open : 11,
            close: 23
        },
        sat : {
            open : 0,
            close : 24
        }
    },

    order : function(starterINdex, mainIndex)  {
        return [this.starterMenue[starterINdex], this.mainMenue[mainIndex]];
    },

    orderDeliver : function(obj) {
        console.log(obj)
    },

    orderPasta : function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`)
    },

    orderPizza : function(mainIngrad, ...otherIngrad) {
        console.log(mainIngrad, otherIngrad)
    }
};

//using spread == it doesn't create new variable like destructoring

var newArr = [1, 2, ...arr];// spreading out element individually from arr
console.log(newArr);
console.log(...newArr);

const newMenue = [...restaurant.mainMenue, 'Goggi'];
console.log(newMenue);

// copy array
const mainMenueCopy = [...restaurant.mainMenue]

//join two or more appary
const dis = [...newMenue, ...mainMenueCopy];
console.log(dis);

//iterables are array, strings, map, sets, not objects  using spread

const str = 'jonas';
const letters = [...str, 's'];
console.log(letters)
// we can't use spread in template literals
//e.g console.log(`${...str}`) error will show 
/*
const obj = {
    a: 1,
    b : 2
}
for(let  i in obj) {
    console.log(obj[i])
}*/ 


// const ingraiednt = [prompt('let\'s make pasta'), prompt("second"), prompt("third")];
// console.log(ingraiednt);
// restaurant.orderPasta(...ingraiednt);

const newRest = {foundIn : 1998, ...restaurant};
console.log(newRest);
const restCopy = {...restaurant};
restCopy.name = 'rosa'
console.log(restaurant.name)


//rest operator -- to combine all element into an array

const [a, b, ...others] = [1, 2, 4, 5, 6];
console.log(a, b, others);

const [Pizza, , Risseto, ...otherFood] = [...restaurant.mainMenue, ...restaurant.starterMenue];

console.log(Pizza, Risseto, otherFood);

//rest for objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

//rest for function
const add = function(...numbers) {
    // console.log(numbers)
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);

restaurant.orderPizza('masroom', 'onion', 'olives')
//first one is main ingradient and others are rest ingradient that is 
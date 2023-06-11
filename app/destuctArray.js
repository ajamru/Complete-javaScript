'use strict';


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
    }
};

restaurant.orderDeliver({
    time : '20',
    address : 'paul street',
    minOrder : 2,
    starterIndex : 1
});

// destuctoring = to break a complex ds to a small things

const arr = [1, 3, 5]
const [a, b, c] = arr
console.log(a, b, c)
console.log(arr) // original array is not efffecting

// const [first, , second] = restaurant.categories
// console.log(first, second)

let [main, , secondary] = restaurant.categories;
// swapping using temp variable
/*
const temp = main
main = secondary
secondary = temp
console.log(main, secondary)*/

// without using temporary variable
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);


console.log(restaurant.order(2, 0))
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse)

// nested destructoring

const nested = [2, 4, [5, 6]];
const [x, , z] = nested;

console.log(x, z);

const [i, , [j, k]] = nested;
console.log(i, j , k);

// setting default value

const [m =1, n = 1, o = 1] = [8]
console.log(m, n , o)



// objct destuctoring
// here we have to put exact key name
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// taking different variable name form property name

const {
    name : restaurantName,
    openingHours : Hours,
    categories : test
} = restaurant;
console.log(restaurantName, Hours, test);

//Default values
const {menu = [] , starterMenue : starter1 = []} = restaurant;

console.log(menu, starter1)

//mutating varibale 
let p = 111
let q = 999
const obj = {
    p : 23, q : 7 , r : 14
};

({p, q} = obj);
console.log(p, q);

// nested object

const {fri : {open, close}} = openingHours;
console.log(open, close);

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
    },

    orderPasta : function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`)
    },

    orderPizza : function(mainIngrad, ...otherIngrad) {
        console.log(mainIngrad, otherIngrad)
    }
};

// opention chaining ?.
//here we do like if mon is exists then check open
console.log(restaurant.openingHours.mon?.open);

const days = ['monday', 'tue', 'wed', 'thu', 'fri', 'sat'];
for(const i of days) {
    console.log(i);
    const opens = restaurant.openingHours[i]?.open ?? 'closed';
    console.log(`On ${i} the resturant opens at ${opens}`);
}


// optional chaining on methods

console.log(restaurant.order?.(0, 1) ?? 'method does not exists');

// array

const user = [{name : 'amru', last : 'ok'}];
console.log(user[0]?.name ?? 'bhul ja bhai');
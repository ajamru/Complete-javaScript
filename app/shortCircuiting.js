'use strict';

console.log(3 || 'jonas');
//or and operator can be use in any data type -- these are used to circuit ternary operation

//or - if first operant in truthy it will return first one it self
console.log('' || 'jonas');//jonas
console.log(true || 0);//true
console.log(undefined || null);//null

// and will return first value if the first value is falsy

console.log(0 && 'hello');
//and are used to circuit if condition

//e.g or
const flag = 0;
let v1 = flag ? 23 : 10;
console.log(v1)

console.log(flag || 10)

// null check ?? only null and undefined are there not 0 and 'empty string'

console.log(flag??10)
console.log(null ?? 10)

const rest1 = {
    name: 'capi',
    numGuest : 20
};

const rest2 = {
    name: 'hello',
    owener : 'don chandu'
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

rest1.numGuest ||= 10;//short hand for above one
rest2.numGuest ||=10

rest1.numGuest ??= 10;//short hand for above one using nulish(null or undefined) assignment operator
rest2.numGuest ??=10

console.log(rest2.numGuest);
console.log(rest1.numGuest);
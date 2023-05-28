'use strict'

// this is not static it depends on how function is called
// for a regular function call has this is undefined
// in strict this is undefined else window object
// for arrow function don't get own this but get from lexical scope

/*
console.log(this) // window

function name(yourName) {
    console.log(this) // undefined
}

name('jena')

const cal = (year) => {
    const b = 2017 - year
    console.log(this) // window
}
cal(2023)
*/
/*
const jonas = {
    year : 1991,
    calcAge : function() {
        console.log(this) // this is ower of the object
        console.log(2010 - this.year)
    }
}

jonas.calcAge()

const matila = {
    year : 2017
}

matila.calcAge = jonas.calcAge
matila.calcAge()
*/

const jonas = {
    firstName : 'Amru',
    year : 1991,
    calcAge : function() {
        console.log(this) // this is ower of the object
        console.log(2037 - this.year)

        //sol1

        // const self = this // create separate variable for setting this
        // const milenial = function() {
        //     console.log(this) //undefined
        //     console.log(self.year >=1981 && self.year <= 1996)
        // }

        //solution2

        const milenial = () => {
            console.log(this) //this take from its parent i.e jonas 
            console.log(this.year >=1981 && this.year <= 1996)
        }

        milenial()
    },

    greet : () => console.log(this.firstName)
}
jonas.greet(); // undefined for arrow
jonas.calcAge()//undefined bcz it is normal function  call after creating separate varibale in line 49 it will give result(before es6 solution)


// argumrents key word
const addExpr = function(a, b) {
    console.log(arguments) // return array of arguments
    return a + b
}

addExpr(2, 3)


var arro = (a, b) => {
    console.log(arguments)// error will show  
   return a + b
}

arro(1, 2) // arguments keyword can't be use in arrow function






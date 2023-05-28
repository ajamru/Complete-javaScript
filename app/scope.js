"stict mode";

// where the varibale is declared -- where we can access the variable.

//global scope -  we can access anywhere in the programme

//functional - local scope we can use only inside the function can't access outside the variable.

//block scoped - access inside block only

// scope chain is irrespective of order of function call

/*
const a = "amru";
first()

function first() {
  const b = "hello";
  second();

  function second() {
    const c = "hi";
    third();
    function third() {
      const d = "hey";
      console.log(d + c + b + a);
    }
  }
} */

// function third() {
//     const d = 'hey'
//     console.log(d + c + b + a)
// } // will through uncaughtreference error

function calcAge(birthYear) {
  const age = 2023 - birthYear
  // console.log(firstName)
  // return age;

  function printAge() {
    // here age varible came from its parent scope
    const outPut = `You ${firstName} are the age in ${age} born in the year ${birthYear}`;
    console.log(outPut)

    if(birthYear  == 1998 && birthYear <= 2000) {
      const str = `oh, you are a milenial, ${firstName}`
      console.log(str)
    }
  }
  printAge();
}

const firstName = 'Amru';
console.log(calcAge(1998));

// we can't acess from outside of the calcAge function
//printAge() function can't access outside of the calcAge function


const hello = 'hello'

{
  const hello = 'hi'
  console.log(hello)
}

console.log(hello)


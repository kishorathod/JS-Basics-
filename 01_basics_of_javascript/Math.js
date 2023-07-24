//++++++++++ Numbers in js +++++++++++++++++
/*
const score = 400;
console.log(score);

// another exclisitive way to define a number 

const balance = new number(100) // this is a dedicated way to define a no 
console.log(balance);

// converting a no to string 
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // very useful method and very imp 
// this will return the output as 100.00

// now we lets talk about the toPrecision()method 

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3));// this will give us a precise value on the bases of  focusing on the first 3 values 

// another intresting method which will give commas to our no 

const hundreds = 1000000;
console.log(hundreds.toLocalString('en-IN'));
*/

//+++++++++++++  Maths +++++++++++++++++++++++++

console.log(Math.abs(-4));// this will give output as 4
console.log(Math.round(8.3)) // this round of and give as 8

console.log(Math.ceil(4.2)) // this will give 5 (for 4.something which mean top value )
console.log(Math.floor(4.2)) // this will give 4 (the lower value )

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));


// now we lets talk about the very imp math function which is Math.random()

console.log(Math.random()); //random value between 0 & 1

console.log((Math.random()*10)+1);// random n value (here n=10)
console.log(Math.floor(Math.random()*10)+1);

/* very improtant concep of getting random no
const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max - min +1)) + min);
*/
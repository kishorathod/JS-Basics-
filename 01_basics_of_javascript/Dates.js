const myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString);

// lets check the type of our date 
console.log(typeof myDate); // it gives an object as a return 

// if we want to declare a specific or new date then we can give parameters in our new Date() function
let myCreatedDate = new Date(2023,0,23,5,3); //year , month ,date,hour,min respectively
// in js the month will start from the zero 

// console.log(myCreatedDate.toDateString());
 
// console.log(myCreatedDate.toLocaleString());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Now we lets talk about the time stamp

let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// this will give the milisecond value

// now we  compare the two days first one is ,myCreatedDate and DateNow(which is myTiemStamp in our case )

console.log(myTimeStamp); 
console.log(myCreatedDate.getTime());

 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* now to try to convert the millisecond date into seconds 
here is the syntax , 

let myTimeStamp = Date.now();

console.log(Math.floor(Date.now()/1000));

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// if we want to  know  just month & days from our date then 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMont());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Array part - 02

const marvel_heros = ["thor","Ironman","spiderman"];

const dc_heros =["superman","flash","batman"];

// Now we try to merge the two above array 

// marvel_heros.push(dc_heros); // this totaly wrong way , if we console log it then we will get array inside the array
// console.log(marvel_heros); //this will return a output as [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// the correct way to add the two or more array elements in a single array is by , 

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//but here we usually dont use the concat() method insted of that we use spread operator method

const all_new_heros =[...marvel_heros, ...dc_heros];

console.log(all_new_heros); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//++++++++++++++++++++++++++++++++++++++++++++

// array inside the array 
const another_array = [1 ,2 ,3 ,[4, 5, 6] ,7 ,[6 ,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array); // output:
 /* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// we can check whether our array contains any string or not 
console.log(Array.isArray("Rathod")) ;
/* output:
[
    
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
false 
*/

// if we want to convert above value "Rathod" into a array then we can use 
console.log(Array.from("Rathod")); // output :[ 'R', 'a', 't', 'h', 'o', 'd' ]

//+++++++++++++++++ Very IMP & Intresting concept +++++++++++++++++++++

// inface we can conver objects into array 

console.log(Array.from({name:"Kishor"})); // intresting
// this will retrun an empty array [] as an output

//++++++ converting  multiple variable into an array +++++++++++++++++++++++++

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // output: [ 100, 200, 300 ]


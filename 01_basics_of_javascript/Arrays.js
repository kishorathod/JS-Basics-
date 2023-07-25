// array 
// in js array can hold both homegeneus as well as heterogeneus data types 

// const myArr = [0, 1, 2, 3, 4,5];
// const myArr = [0,1,2,3,4,true,"Rathod"];

// javascript arays are resizeble  

//here is the  another way to declare the array 
// const myArr = new Array(1,2,3,4);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Array methods 
const myArr = [0, 1, 2, 3, 4,5];
// myArr.push(8); // adds the new element at the end of array
// console.log(myArr);

// myArr.pop(); // removes the last element at the end of the array
//console.log(myArr);

// myArr.unshift(9); // this  method add the new element at the start of the array 
// and shifts the remaining elements to right side 

// if we want to remove the newly added element which is at the starting of the array
// myArr.shift(); // this will delete the newly added element which is at the begining

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// checking whether the element is present in the array or not 

// console.log(myArr.includes(9)); // false 

// joining and converiting array elements into the string 

// const newArr = myArr.join();

// console.log(myArr); // this will give array
// console.log(newArr); // this will give a string form of array 

// if  we check the datatype of the newArr then we will get string 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//slice , splice (defference between slice and splice)

console.log("a",myArr); // output :a [ 0, 1, 2, 3, 4, 5 ]

// slice (it doesnt manipulates the original array)
const myNewArray1 = myArr.slice(1,3);
console.log("b", myArr); //output : b [ 0, 1, 2, 3, 4, 5 ]
console.log(myNewArray1); //output :  [ 1, 2 ]
 
// splice (this will manipulates the original array)
const myNewArra2 = myArr.splice(1,3);
console.log("c", myArr); // output : c [ 0, 4, 5 ]
console.log(myNewArra2); // output : [ 1, 2, 3 ]

 
 
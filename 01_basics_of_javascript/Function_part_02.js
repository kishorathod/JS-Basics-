// In E-comerce websites we dont now how many carts user can input 
// this is the case where we dont now how many arguements does the user can input  

// Rest Operator 
// ex -01 
function calculateCartPrice (...num1)
{
   return num1 ;
}

console.log(calculateCartPrice(200,400,500,200,5000)); // output : [ 200, 400, 500, 200, 5000 ]

// second example
function calculateCartPrice (val1,val2, ...num1)
{
   return num1 ;
}

console.log(calculateCartPrice(200,400,500,200,5000)); // output : [ 500, 200, 5000 ]
// here 200 goes into the val1 & 400 goes into the val2

//++++++++++++++ Now we try to pass object as a arguement inside the function ++++++++++++++++++++++++++++++++++++++

const user = {
   userName:"Rathod",
   price:199
}

function handleObject (anyobject)
{
   console.log(`user name  is ${anyobject.userName} and price is ${anyobject.price}`);
}

console.log(handleObject(user)); // output :  user name  is Rathod and price is 199

// we can also pass value to the handleObject function in this way 

// handleObject({
//    userName:"hitesh",
//    price:399
// })

// +++++++++++++++ Now we try to extract the value from the array by using the  function ++++++++++++++++++++++++

const myNewArray = [200,400,100,600];

function returnSecondValue (getArray)
{
   return `the Third element inside the array is ${getArray[2]}`;
}

console.log(returnSecondValue(myNewArray)); // the Third element inside the array is 100



 // now we try to add the symbol data type in the object 
const mySymbol = Symbol("hello");
 
 // declaring the object
 
 const jsUser = {
    name:"kishor",
    age:21,
    location:"jaipur",
    email:"krr@gmai.com",
    isLoggedIn:false,
    [mySymbol]:"hello",
    lastLoginDays:["monday","saturaday"]
 }

 //trying to access the members of object 

// console.log(jsUser.name); // this is not the right way to access the memebers  
 // console.log(jsUser["name"]); // right way  
 // console.log( typeof mySymbol);// this  will return symbol

 //++++++++++ Now we try to override the values  inside the object ++++++++++++++++
/*
 jsUser.email = "krr8088@gmail.com";
 jsUser.name = "Rathod";

 console.log(jsUser["email"]);
 console.log(jsUser["name"]);
 */

 //++++++++++++ If we dont want to override the values inside the object then we have to freez the object +++++++++
 // Object.freeze(jsUser); // after this no values will be changes 

 jsUser.location ="Bidar";

 console.log(jsUser["location"]); // this will  return output as jaipur insted of bidar (because we cant override the value)

//+++++++++++++ Adding functions inside the objects +++++++++++++++++++++++++
/*
jsUser.greeting = function(){
   console.log("hello js user ");
}

console.log(jsUser.greeting); // output : [Function (anonymous)]

console.log(jsUser.greeting()); //output : hello js user 
*/

// Now we create another function and we reference a name which is in the object already
// to reference that we need 

jsUser.greetingTwo = function(){
   console.log(`Hello js user, ${this.name} `); // now by doing this our functionTwo have the reference of  the name (which declared in the object)
}

console.log(jsUser.greetingTwo());

//++++++++++++++++++++++++++++ Now we see Single-ton and non-Single-ton Objects ++++++++++++++++++++++++++

const tinderUser = new Object(); // this is single ton object 

console.log(tinderUser); // this will retun output as { }

//-------Non single-ton object 
const tinderUser2 = {};
console.log(tinderUser2); 

// now we give values  to this object 

tinderUser2.id="123abc";
tinderUser2.name="sammy";
tinderUser2.isLoggedIn =false;

console.log(tinderUser2); // output : { id: '123abc', name: 'sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser2)); // this will  return whatewar the keys defined inside the object // output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser2)); // this will  return whatewar the values defined inside the object // output :[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser2));// output : [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser2.hasOwnProperty("isLogged"));  // false (isLogged is not found)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//--------Now we talk about the Nested objects ---------------

// object declaration one inside the another 

const regularUser = {
   email:"someOne@gmai.com",
   fullName:
   {
      userFullNmae :
      {
         firstName:"kishor",
         lastName:"Rathod"
      }
   }
}

console.log(regularUser.fullName.userFullNmae);

// ------------- Now we mearge the  two  object values into  single object -----------
// we do this with the help of the sphread operator 

const obj1 ={1:"a", 2:"b"};
const obj2 ={3:"c", 4:"d"};

const obj3 = {...obj1, ...obj2};

console.log(obj3);
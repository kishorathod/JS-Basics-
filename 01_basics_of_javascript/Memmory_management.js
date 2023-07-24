//we have to types of memory, which are stack and heap 

//stack(this memmory is for primative datatype)
//heap (this memory is for non-primitive or reference type)

/* Example for the stack memeory(here copy of the value is passes not actual value which is stored in the memmory)
let myYoutubeName = "Rathoddot.com";
let anotherName = myYoutubeName;
anotherName="chai_aur_code";

console.log(myYoutubeName);//Rathoddot.com
console.log(anotherName); // chai_aur_code
*/


/* Example for the Heap Memmory (here in the reference type of stored the actual value is passed not the copy )

let userOne={
     email:"user@gmail.com",
     upi:"user@ybl"
 }

 let userTwo = userOne; //here  userTwo have the reference of userOne

userTwo.email="krr@gmail.com"

console.log(userOne.email); // value also will change in userOne object
console.log(userTwo.email);

*/
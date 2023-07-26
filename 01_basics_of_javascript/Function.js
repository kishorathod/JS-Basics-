// function addTwoNumbers(num1,num2)
// {
//     return(num1+num2);
// }

// const a = addTwoNumbers(2,3);
// console.log(a);

// another example 

 function loginUserMessage(username)
 {
    if(username === undefined)
    {
      console.log("please enter a user name");
      return 
    }
    return `${username},just logged in`;
 }

 console.log(loginUserMessage());

 // if user doesnt pass any value then we can use or pass default value 

 function loginUserMessage(username="Rathod")
 {
    if(!username)
    {
      console.log("please enter a user name");
      return 
    }
    return `${username},just logged in`;
 }

 console.log(loginUserMessage());

// by doing this user doesnt containe a undefined value (if he doesnt pass any inpt in that pass "Rathod" will be passed as a arguement)


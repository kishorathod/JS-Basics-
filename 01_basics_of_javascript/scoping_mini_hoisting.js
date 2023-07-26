// scoping 
// in the the childs can access the parent properties (closer)

function one()
{
    const  username ="Rathod";

    function two()
    {
        const website="youtube";
        console.log(username);
    }
     two();
}

one();

 // another example based upon the if-else 
 if(true)
 {
    const username="hitesh";
    if(username==="hitesh")
    {
        const website = "youtube";
        console.log(username+website);
    }
    // console.log(website);
 }

//  console.log(username); 


//+++++++++++++++++ Intresting ++++++++++++++++++++++++++

console.log(addone(5)); // output : 6 (here hoisting is allowed)
 
function addone(num){
    return num+1;
}


console.log(addone(5)); // shows an error(because we can not access addTwo before the function expression)
const addTwo = function(num)
{
    return num+2;
}

// In the above case the hoisting is not allowed 
 

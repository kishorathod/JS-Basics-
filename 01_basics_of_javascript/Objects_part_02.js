// destructuring the object 

const course ={
    coursName : "js toutorail",
    price:"999",
    courseIntructore:"Rathod"
}

// lets try to access the values from the object 
// console.log(course["coursName"]);


// we also have another way to access the members from the object like, this 
// const {courseIntructore}=course ;
// console.log(courseIntructore);


//++++++++++++ Now we see Object destructuring ++++++++++++++

const {courseIntructore:instructore}=course ;
console.log(instructore);

// API give  a respone  in the form Json(java script object Notation) format 

/*
Example for the json data format(which usually return in the form of object) :
{
    "name":"Rathod",
    "courseName": "js in hindi",
    "price":"free"
}

And Sometime it return in the form of array (in the following way )
[
    {},
    {},
    {}
]
 */





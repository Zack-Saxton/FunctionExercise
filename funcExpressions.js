// Functions Expressions 
// Creating a function and storing it to a variable

/* 
SYNTAX 

variableType variableName = function(){
    CODE TO BE RUN GOES HERE
}

-ARROW FUNCTION-
variableType variableName = function() => {
    CODE TO BE RUN GOES HERE
}


*/
// EXAMPLE one
const theFuncExpress = function (){
    console.log(`hope on board the func express`);
    console.log(`This is a function expression`);
}
console.log("==========");


// Example 2 
// whenever the file runs that are not <variable = function> are hoisted to be run first and preceeds where the function is created because of function being hoisted to beginning of Javascript file



funcOne();

function funcOne(){
    console.log(`Hello`);
}

// Example 2B
// CANNOT run a function that precedes where the function is created because Function Expressions are not hoisted to the beginning of JS file 

// funcTwo();

// const funcTwo = function(){
//     console.log(`Not hoisted`);
// }

// Example 3


const funcThree = () => {
    console.log(`end of lesson`);
}

funcThree();

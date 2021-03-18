// HIGHER ORDER FUNCTIONS

// Passing a function as a parameter/argument into another function


/*

*/


// Example 1
// Passing a pre-existing function as a parameter
function showNumber(num) {
 console.log(num);   
}
const number = 2
showNumber(number);

console.log("=================");

// Function created to pass as an argument into the "print" function

function hello() {
    console.log(`hi`);
    
}
function print(greet) {
    // Need to include the parentheses "()" so the function passed in as an arguemtn will run/execute
    greet();

    // do NOT include "()" after functionname when passing in as an arguement. Doing this will run/execute function before it is passed in. 
}
print(hello);

console.log("===============");

// EXAMPLE 2 

function funcOne(p = function(){
    console.log(`set a function as the the default parameter value(p=function) the p is the parameter name and can be anything`);
    
}) {
    p (); 
}
// runs the funcOne function with the default anoonymous function as the arguement for the "p" parameter 
funcOne();

console.log("===========");

funcOne(() => console.log(`this is an anonymous arrow function`));


















































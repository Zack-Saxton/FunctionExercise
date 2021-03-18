// SCOPE

// Scope determines accessibility (visibility) of variable
// where we create a variable determines where it can be used/called 


// FUNCTION SCOPE - (Each function has it's own scope)

// Example 1

const location = `Scranton, PA`;

function dunderMifflin(){
    const regionalManager = `Michael Scott`;
    console.log(regionalManager);
    // this is ok and works bc the log is also inside the function where the regianalManager  variable was created (the regionalManager variable is scoped to the dunderMifflin function) 
}

dunderMifflin();

console.log(location); //This is ok and work bc the location variable is scoped to the entire JS script

console.log("=============");

// Example2

let dwight = `Assistant to the regional manager`;

function promotion (){
    dwight = `Assistant Regional Manager`;
}
console.log(dwight);//Displays the initial value of the dwight variable(assistant to the regional manager)

promotion();

console.log(dwight);//displays the updated value of dwight(the function has been run returns assistant regional manager )


console.log("=============");
let declare = "";

function bankruptcy(){
    let declare = `I....declare....bankruptcy`;
    console.log(declare);
}
bankruptcy();
console.log(declare);

console.log("=============");

// BLOCK SCOPE (conditional statement and loops have block scope)

// CONDITIONAL STATEMENT EXAMPLE 
const seasons = 9;

if (seasons === 9 ){
    const episodes = 201;
}

console.log(seasons);




// Loops Example


for (i = 1; i <= 3; i++){

    // you can create variable in a loop without getting an error will be intialized each time/declare each time trhough the loop (like it is being created for the first time each time through the loop)
    const fireDrill = `Whats the procedure`;
    console.log(fireDrill);
}


// LEXICAL SCOPE 

// Lexical Scope is the ability for function scope to acess variables from the "parent" scope (NOTE: Th entire "parent" scope can be another function or the entire JS scope(global scope)) 

// NESTED FUNCTION

// EXAMPLE 

console.log("==============");

function question (){
    const fearLoved = `Would I rather be feared or loved `;
    function answer(){
        const easyBoth = `Easy both I want them to be afraid to love me`;
        console.log(easyBoth);
        console.log();
    }
    answer();
} 
question();


// must run exeute the answer function for it to be run with runing/executing the question function 





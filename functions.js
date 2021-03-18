// FUNCTION BASICS
// Functions are created lines of code that we can used throughout a JavaScript file (AKA Reuseable Procedures)

// Yahtzee Dice Roll Function Example

// const die1 = Math.floor(Math.random() * 6) + 1;
// const die2 = Math.floor(Math.random() * 6) + 1;
// const die3 = Math.floor(Math.random() * 6) + 1;
// const die4 = Math.floor(Math.random() * 6) + 1;
// const die5 = Math.floor(Math.random() * 6) + 1;

// function rollDie(){
//   return Math.floor(Math.random() * 6) + 1;
// }

// const die1 = rollDie();
// const die2 = rollDie();
// const die3 = rollDie();
// const die4 = rollDie();
// const die5 = rollDie();

// console.log(die1);
// console.log(die2);
// console.log(die3);
// console.log(die4);
// console.log(die5);

/*
Syntax Example

To create a function...
function functionName(){
  CODE TO BE RUN GOES HERE;
}

To run/use a function...
functionName();
*/

// Example 1
function scream(){  
    console.log(`Do you like scary movies?`);
}
// Runs/executes the "scream" function
scream("=============");



// Example 2
// A function can have multiple lines of code inside of it
function saw(){
  console.log(`Would you like to...`);
  console.log(`play a game?`);
}
// Function can be run/executed multiple times in a file
saw();
saw();
console.log("============");



// FUNTIONS WITH PARAMETERS/ARGUMENTS

// Parameters are the names created when the function is created /declared

// Arguments are the values entered/passed in when running/ executing the function

/*========== SYNTAX ================
 
To create a function with a parameter...

function functionName(parameter(can call this anything you want like a variable)){
  CODE TO BE RUN GOES HERE....
  AS WELL AS PARAMETER;
}



TO RUN FUNCTION WITH A PARAMETER

functionName(argument)
*/

// Example
// "badguy is the parameter"
function horrorMovieVillain(badguy){
  console.log(`${badguy} is the scary movie villian`);
}
const m = `Micael Myers`;
horrorMovieVillain(m)
horrorMovieVillain(`Chucky`)
horrorMovieVillain(`Jeffrey Dalhme`)

function theShining (word){
  const message = word.reverse();
  console.log(message);
  
}
// Parameters can accept all types of values
theShining(["R", "E", "D", "R", "U" ,"M"]);

console.log("================");


function villianWeapon(villian, weapon){
  console.log(`${villian}'s weapon of choice is a ${weapon}`);
}

villianWeapon (`Jason`, `machete`);

villianWeapon(`Leatherface`, `chainsaw`)


villianWeapon(`Freddy Kruger`, `Dreams of fear`)


function sawMovies (numMovies, preferredNumMovies){
  console.log(`They have made ${numMovies} Saw Movies. That is ${numMovies - preferredNumMovies} too many. They should have just made ${preferredNumMovies} `);

}
sawMovies(9,3)


// Example
// a default argument can be set for a parameter 
function horrorMovieQuotes(quote = `Here's Johnny`){
  console.log(quote);
}
// Runs/executes with the default argument value
horrorMovieQuotes();

// Runs/executes the function with the new argument which overrides the default argument value
horrorMovieQuotes(`We have such sights to show you`);


horrorMovieQuotes(`It rubs the lotion on its skin`);


// RETURN KEYWORD
// The RETURN keyword stops the execution of a function and returns a value if a value is present

/*
Syntax Example

function functionName(){
  return value;
}
*/
// Using a console log in a function displays the value in the terminal/console, but we are not able to capture or set that value to something. However, we can do that with the RETURN keyword.

// Example 1
function sixthSense(){
  return `I See Dead People`;
}

// Function returns a value and the value is displayed in the terminal/console
console.log(sixthSense());


// Function returns a value that we can set to a variable
const cole = sixthSense();
console.log(cole);


console.log("==================");

// Example 

function freddyKruger(){
  console.log(`Whatever you do...`);
  return;
  console.log(`Don't fall asleep`);
}
freddyKruger();


console.log("==================");

function aQuietPlace(sound){
  if (sound === ""){
    return `You are safe`;
  }
  return `They here you`;
}

const safe = aQuietPlace("");
console.log(safe);


// FUNCTION NESTING

/*
Syntax Example

function functionNameOne(){
  CODE TO BE RUN GOES HERE (if necessary);
  functionNameTwo(){
    CODE TO EB RUN HERE;
  }
  CODE TO BE RUN GOES HERE (if necessary);
}
*/

// Example 

function dracula(){
  function draculaOne(){
    console.log(`I do not drink wine`);
  }
  draculaOne();
}

dracula();
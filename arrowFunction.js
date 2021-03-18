// ARROW FUNCTIONS 


/*
Syntax Example

functionName = () => {
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
themeSong = () => {
    console.log(`Just sit right back and you'll hear a tale`);
  }

  themeSong();

  console.log("==============");


//   Parentheses basically can be used instead of using a return keyword
//   Example
// "()" can be used in a arrow function to return a value without using the <return> keyword

// semicolon is not to be used in this case
boat = () =>(
    `the ss minow`
)

const boatName = boat ();

console.log(boatName);

// Example
// Returns values after the => 
crew = () => `Gilligan, Skipper, Ginger, Howls`;

const names = crew ();

console.log(names);

console.log("===========");

tourLength = num => {
    console.log(`${num} hour tour`);
}

tourLength(3);

console.log(tourLength);


lyrics = (one, two, three) => {
    console.log(`No ${one}, no ${two}, no ${three}, not a single luxury`);
}
lyrics(`phone`, `lights`, `car`);


// FUNCTION BASICS REVIEW
// A JavaScript function is a block of code designed to perform a specific task

// Example 1
// Creates the phineasFerb function
function phineasFerb(){
    console.log(`Hey Ferb, I know what we're gonna do today!`);
  }
  // Runs the phineasFerb function
  phineasFerb();
  
  console.log("========");
  
  // Example 2
  // A function can have multiple lines inside of it
  function perry(){
    console.log(`Hey...`);
    console.log(`where's Perry?`);
  }
  // A function can be run multiple times in a file
  perry();
  perry();
  
  console.log("========");

  
  // PARAMETERS & ARGUMENTS
  
  // Example 1
  // "char" is the parameter
  function bestCharacter(char){
    console.log(`${char} is the best character on Phineas and Ferb`);
  }
  // `Dr. Heinz Doofenshmirtz` is the argument
  bestCharacter(`Dr. Heinz Doofenshmirtz`);
  bestCharacter(`Buford Van Stomm`);
  bestCharacter(`Norm`);
  
  const mongram = `Major Francis Monogram`;
  
  bestCharacter(mongram);


  console.log("==============");


//   Example 2

function doofAndPerry(adjective){

    console.log(`Oh perry the platypus how un${adjective} and by un${adjective} i mean compeltely ${adjective.toUpperCase()}`);
}
doofAndPerry('expected')



// Example 3

function openingSong(num){
    console.log(`There's ${num} days of summer vacation...`);
}
openingSong(104);
openingSong(`104`);

console.log("===============");

// Example 4


function doof(name, animal){
    console.log(`Curse you, ${name} the ${animal}`);
}

doof(`perry`, `platypus`);


// Example 5 

function invention(inator = `bread`){
console.log(`Behold y evil new scheme the ${inator}-inator`);
}
invention();

invention(`mustache `);


// RETURN KEYWORD 

function isabelle(){

    return `what cha doing`;
}

console.log(isabelle);

const wd = isabelle();

console.log(wd);
console.log("===============");
// Example

function perryTheme(){
    console.log(`dooby do`);
    return;
    
    console.log(`perry`);
    
}
perryTheme();


console.log("===============");



function busted (momFindsOut){
    if (momFindsOut){
        return`introuble`
        }
        return `not in trouble`
}

busted(true);




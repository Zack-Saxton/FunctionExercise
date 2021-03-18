// SPREAD & DESTRUCTURING WITH FUNCTIONS (PARAMETERS AND ARGUMENTS)


// **** Arrays ****

const powerRangers = [
    "Red",
    "Blue",
    "Pink",
    "Black",
    "Yellow",
    "Green",
    "White"
];

//-- SPREAD --

// w/o spread or destruct

function aWOS (color){
    
    console.log(color [6]);
    console.log(color [0]);
    console.log(color [1]);
    console.log(color [2]);
    console.log(color [3]);
    console.log(color [4]);
    console.log(color [5]);
}

aWOS (powerRangers);

// With spread
function aWS(a, b, c, d, e, f){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

aWS(...powerRangers);
console.log("=============");



// --- Destructuring ----


// With destruct
// destructuring thr array arguments passed in by destructuring the parameter for the function
function aWD ([one, two, three, four, five, six, seven]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    console.log(seven);
}


aWD(powerRangers)

const rangerNames = {
    blueRanger:`billy`,
    redRanger:`jason`,
    blackRanger:`zack`,
    yellowRanger:`trini`,
    pinkRanger:`kimberly`,
    whiteRanger:`tommy`,
    greenRanger:`tommy`
    
};


function oWOD(name){
    console.log(name.blueRanger);
    console.log(name.redRanger);
    console.log(name.blackRanger);
    console.log(name.yellowRanger);
    console.log(name.pinkRanger);
    console.log(name.whiteRanger);
    console.log(name.greenRanger);
}
// displays each key value from the rangerNames object by accessing each value with the key that it is paired with 
oWOD(rangerNames);


function oWD1({blueRanger, redRanger, blackRanger, yellowRanger, pinkRanger, whiteRanger, greenRanger}){
    console.log(blueRanger);
    console.log(redRanger);
    console.log(blackRanger);
    console.log(yellowRanger);
    console.log(pinkRanger);
    console.log(whiteRanger);
    console.log(greenRanger);
}

oWD1(rangerNames);
console.log("=============");


// Example 2

function oWD2({yellowRanger, pinkRanger}){
    console.log(yellowRanger);
    console.log(pinkRanger);
}

oWD2 (rangerNames);

console.log("==========");

// USING REST with FUNCTIONS 

// using REST so if 2 or more arguments (the rest of them)

// are passed in to this function they will be grouped in the other_villian parameter as an array of those values. 

function funcWithRest(villain_main, ...other_villain){
    console.log(villain_main);
    console.log(other_villain);
}

funcWithRest(`rita`, `ivan`, `goldar`, `zedd`)

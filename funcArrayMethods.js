// FUNCTION ARRAY METHODS (ForEach, Map, and Filter )

// Array methods that require a function to be passed as an argument 


// FOR EACH 

// Calls/Runs a function for each item in the array




const friends = [
    `Chandler Bing`,
    `Rachel Green`,
    `Monica Geller`,
    `Joey Tribbiani`,
    `Phoebe Buffay`
]


// EXAMPLE 1

names = (n) =>{ 
    console.log(n);
}

// Runs the names function on each item in the "friends" array using the array item value as the arguement for hte "p" parameter (NOTE: Function must have a parameter to plug the value of each array item into.)

friends.forEach(names)




// Example 2

friends.forEach(actors => console.log(actors.toUpperCase()));


console.log("================");


// MAP 
// Creates a new array with the returned values from calling/running a function for every array item. (NOTE; The MAP method does NOT alter the original array)

const actors = [
   
        {first: `jennifer`,last: `aniston`},
        {first: `matthew`,last: `perry`},
        {first: `courtney`,last: `cox`},
        {first: `david`,last: `schimmer`},
        {first: `matt`,last: `leblanc`},
        {first: `lisa`,last: `kudrow`}
    

];

function realNames(a){
    return `${a.first} ${a.last}`;
} 

const firstAndLast = actors.map(realNames);

console.log(firstAndLast);


console.log("==========");


// EXAMPLE 2 

const friendsInitals = actors.map(i => `${i.first[0]} ${i.last[0]}`);



console.log(friendsInitals);


// FILTER 

// Creates an array filled with all array items that pass a test that is provided as a function. (NOTE: The Filter method does NOT alter the original array )


// EXAMPLE 1

const friendsSeasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSeasons(season){
    return season === 4 || season === 5 ||season === 9;
}
// Adds the 4 and 5 array value to the new array that is created 
const bestSeasons = friendsSeasons.filter(findSeasons);


console.log(bestSeasons);




// EXAMPLE 2

const themeSong  = [
    `I'll be there for you`,
    `When the rain starts to pour`,
    `I'll be there for you`,
    `Like I've been there before`,
    `I'll be there for you`,
    `Cause you're there for me too`
  ];


 const kyrics = themeSong.filter(line => line === `I'll be there for you`);

 
 console.log(kyrics);
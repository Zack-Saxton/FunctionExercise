const jPDinos = [

    'velociraptor',
    'trex',
    'dilophosaurus'
];


function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}

seeDinos(...jPDinos);

const jPCharacters = {
    alanGrant = "Sam Neill",
    ellieSattler = "Laura Dern",
    ianMcalcom = "Jeff Goldblum"
};


// 2b
function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
  }
  seeCharacters(jPCharacters);
  
  console.log("============");


  
// BONUS
// 3a
const jurrasicParkMovies = [
    {
      one: "Jurassic Park",
      two: "The Lost World: Jurassic Park",
      three: "Jurassic Park III"
    },
    {
      four: "Jurassic World",
      five: "Jurassic World: Fallen Kingdom"
    }
  ];
  
  // 3b
  function seeJPMovies([{one, two, three}, {four, five}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
  }
  seeJPMovies(jurrasicParkMovies);


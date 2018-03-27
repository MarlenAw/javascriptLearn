var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];

/************/
/*** ES5 ***/
/**********/

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
  if(computers[i].ram < 16){
    console.log(  allComputersCanRunProgram = false);
  }else{
    console.log(onlySomeComputersCanRunProgram = true);
  }
} //OUTPUT: true false true


/************/
/*** ES6 ***/
/**********/

var com = computers.every((computer) => {
  return computer.ram > 16;
});

console.log(com); //OUTPUT: false
// with every method --- if theres only one criteria that doesnt pass, it'll return false!

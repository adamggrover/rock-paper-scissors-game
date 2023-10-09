// initilise variables
const o=["rock","paper","scissors"];let s=0,r=0;console.log(//
function(){// set both player scores to 0
s=0,r=0;// play five round game
for(let e=0;e<5;e+=1){let e=window.prompt("Make your selection (rock/paper/scissors)").toLowerCase(),t=o[Math.floor(Math.random()*o.length)];// play round and display result message
console.log(function(o,e){// messages to be returned to user at the end of the round
let t=`You win the round! ${e} beats ${o}`,n=`You lose the round! ${o} beats ${e}`,c=`Tie round. You both chose ${e}`;return"rock"===o&&"paper"===e?(s+=1,t):"rock"===o&&"scissors"===e?(r+=1,n):"paper"===o&&"scissors"===e?(s+=1,t):"paper"===o&&"rock"===e?(r+=1,n):"scissors"===o&&"rock"===e?(s+=1,t):"scissors"===o&&"paper"===e?(r+=1,n):c}(t,e)),// display running game score
console.log(`${s}:${r}`)}return(// display result of game
s>r?`Congratulations! You won the game ${s} rounds to ${r}`:`You lost the game ${r} rounds to ${s}`)}());//# sourceMappingURL=index.78276221.js.map

//# sourceMappingURL=index.78276221.js.map

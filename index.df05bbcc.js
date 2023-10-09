// initilise variables
const e=["rock","paper","scissors"];let t=0,o=0;!function(){// set both player scores to 0
t=0,o=0;// add event listeners to choice buttons
let n=document.querySelectorAll(".user-selection-btn"),r=document.querySelector(".msg-round-container"),s=document.querySelector(".msg-game-container"),c=document.querySelector(".score-container");n.forEach(n=>{n.addEventListener("click",function(){!function(n){if(t<5&&o<5){let u=e[Math.floor(Math.random()*e.length)];// assign computer choice to variable
r.textContent=function(e,n){// messages to be returned to user at the end of the round
let r=`You win the round! ${n} beats ${e}`,s=`You lose the round! ${e} beats ${n}`,c=`Tie round. You both chose ${n}`;return"rock"===e&&"paper"===n?(t+=1,r):"rock"===e&&"scissors"===n?(o+=1,s):"paper"===e&&"scissors"===n?(t+=1,r):"paper"===e&&"rock"===n?(o+=1,s):"scissors"===e&&"rock"===n?(t+=1,r):"scissors"===e&&"paper"===n?(o+=1,s):c}(u,n),c.textContent=`${t}:${o}`,(5===t||5===o)&&(t>o&&(r.textContent=`Congratulations! You won the game ${t} rounds to ${o}`),s.textContent=`You lost the game ${o} rounds to ${t}`)}// display running game score
}(this.value)})})}();// display results
//# sourceMappingURL=index.df05bbcc.js.map

//# sourceMappingURL=index.df05bbcc.js.map

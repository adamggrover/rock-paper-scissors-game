// initilise variables
const e=["rock","paper","scissors"];let t=0,o=0;!function(){// set both player scores to 0
t=0,o=0;// add event listeners to choice buttons
let r=document.querySelectorAll(".user-selection-btn"),n=document.querySelector(".msg-round-container"),c=document.querySelector(".msg-round-container-summary"),s=document.querySelector(".msg-game-container");document.querySelector(".score-container");let u=document.querySelector(".user-score-text"),i=document.querySelector(".computer-score-text"),a=document.querySelector(".user-choice-img"),l=document.querySelector(".computer-choice-img");r.forEach(r=>{r.addEventListener("click",function(){!function(r){if(t<5&&o<5){let m=e[Math.floor(Math.random()*e.length)],d=function(e,r){// messages to be returned to user at the end of the round
let n="You win the round!",c=`${r} beats ${e}`,s="You lose the round!",u=`${e} beats ${r}`,i=`You both chose ${r}`;return"rock"===e&&"paper"===r?(t+=1,[n,c,e,r]):"rock"===e&&"scissors"===r?(o+=1,[s,u,e,r]):"paper"===e&&"scissors"===r?(t+=1,[n,c,e,r]):"paper"===e&&"rock"===r?(o+=1,[s,u,e,r]):"scissors"===e&&"rock"===r?(t+=1,[n,c,e,r]):"scissors"===e&&"paper"===r?(o+=1,[s,u,e,r]):["Tie round",i,e,r]}(m,r);// assign computer choice to variable
n.textContent=d[0],c.textContent=d[1],u.textContent=t,a.src=`./assets/icons/${d[3]}.png`,i.textContent=o,l.src=`./assets/icons/${d[2]}.png`,(5===t||5===o)&&(t>o?s.textContent=`Congratulations! You won the game ${t} rounds to ${o}`:s.textContent=`You lost the game ${o} rounds to ${t}`)}// display running game score
}(this.value)})})}();// display results
//# sourceMappingURL=index.85bc7188.js.map

//# sourceMappingURL=index.85bc7188.js.map

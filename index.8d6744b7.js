function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=r.parcelRequireee27;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},r.parcelRequireee27=c),c.register("27Lyk",function(t,r){e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>n,e=>n=e);var o,n,c={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)c[t[r]]=e[t[r]]},n=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),c("27Lyk").register(JSON.parse('{"izUj7":"index.8d6744b7.js","dLBrJ":"rock.6d65db19.png","bEqFJ":"paper.8009adad.png","bycKF":"scissors.4534bd70.png","63Hoa":"question.ae26f991.png"}'));// import images
var s={};s=new URL(c("27Lyk").resolve("dLBrJ"),import.meta.url).toString();var i={};i=new URL(c("27Lyk").resolve("bEqFJ"),import.meta.url).toString();var a={};a=new URL(c("27Lyk").resolve("bycKF"),import.meta.url).toString();var u={};u=new URL(c("27Lyk").resolve("63Hoa"),import.meta.url).toString();// Get the modal
const l=document.getElementById("myModal"),d=document.querySelector(".btn-play-again"),p=document.querySelector(".user-choice-img"),f=document.querySelector(".computer-choice-img"),m=document.querySelector(".msg-round-container"),y=document.querySelector(".msg-round-container-summary"),b=document.querySelector(".msg-game-container");function g(){m.textContent="First player to 5 points wins",y.textContent="make your selection"}document.querySelector(".score-container");// get the player score containers
const k=document.querySelector(".user-score-text"),v=document.querySelector(".computer-score-text"),x=["rock","paper","scissors"];// initilise player score variables
let S=0,h=0;d.addEventListener("click",()=>{// close modal
l.style.display="none",// set player choice images to question marks
p.src=/*@__PURE__*/t(u),f.src=/*@__PURE__*/t(u),// reset player scores
S=0,h=0,// update player score text containers on page
k.textContent=0,v.textContent=0,g()}),function(){// set both player scores to 0
S=0,h=0,g();// add event listeners to choice buttons
let e=document.querySelectorAll(".user-selection-btn");e.forEach(e=>{e.addEventListener("click",function(){!function(e){if(S<5&&h<5){let r=x[Math.floor(Math.random()*x.length)],o=function(e,t){// messages to be returned to user at the end of the round
let r="You win the round!",o=`${t} beats ${e}`,n="You lose the round!",c=`${e} beats ${t}`,s=`You both chose ${t}`;return"rock"===e&&"paper"===t?(S+=1,[r,o,e,t]):"rock"===e&&"scissors"===t?(h+=1,[n,c,e,t]):"paper"===e&&"scissors"===t?(S+=1,[r,o,e,t]):"paper"===e&&"rock"===t?(h+=1,[n,c,e,t]):"scissors"===e&&"rock"===t?(S+=1,[r,o,e,t]):"scissors"===e&&"paper"===t?(h+=1,[n,c,e,t]):["Tie round",s,e,t]}(r,e);// assign computer choice to variable
switch(m.textContent=o[0],y.textContent=o[1],k.textContent=S,v.textContent=h,e){case"rock":p.src=/*@__PURE__*/t(s);break;case"paper":p.src=/*@__PURE__*/t(i);break;case"scissors":p.src=/*@__PURE__*/t(a);break;default:p.src=/*@__PURE__*/t(u)}switch(r){case"rock":f.src=/*@__PURE__*/t(s);break;case"paper":f.src=/*@__PURE__*/t(i);break;case"scissors":f.src=/*@__PURE__*/t(a);break;default:f.src=/*@__PURE__*/t(u)}(5===S||5===h)&&(l.style.display="block",S>h?b.textContent="You Won!":b.textContent="You Lost!")}// display running game score
}(this.value)})})}();// display results
//# sourceMappingURL=index.8d6744b7.js.map

//# sourceMappingURL=index.8d6744b7.js.map
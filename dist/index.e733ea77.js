function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=r.parcelRequireee27;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},r.parcelRequireee27=s),s.register("27Lyk",function(t,r){e(t.exports,"register",()=>o,e=>o=e),e(t.exports,"resolve",()=>n,e=>n=e);var o,n,s={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},n=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("27Lyk").register(JSON.parse('{"izUj7":"index.e733ea77.js","dLBrJ":"rock.6d65db19.png","bEqFJ":"paper.8009adad.png","bycKF":"scissors.4534bd70.png","63Hoa":"question.ae26f991.png"}'));// import images
var c={};c=new URL(s("27Lyk").resolve("dLBrJ"),import.meta.url).toString();var i={};i=new URL(s("27Lyk").resolve("bEqFJ"),import.meta.url).toString();var a={};a=new URL(s("27Lyk").resolve("bycKF"),import.meta.url).toString();var u={};u=new URL(s("27Lyk").resolve("63Hoa"),import.meta.url).toString();// Get the modal
const l=document.getElementById("myModal"),d=document.querySelector(".btn-play-again"),p=document.querySelector(".user-choice-img"),f=document.querySelector(".computer-choice-img"),m=document.querySelector(".msg-round-container"),y=document.querySelector(".msg-round-container-summary"),b=document.querySelector(".msg-game-container"),g=document.querySelector(".user-score-text"),k=document.querySelector(".computer-score-text"),v=["rock","paper","scissors"];// initilise player score variables
let x=0,h=0;function S(){// set text container messages for start of game
m.textContent="First player to 5 points wins",y.textContent="make your selection",// set player choice images to question marks
p.src=/*@__PURE__*/t(u),f.src=/*@__PURE__*/t(u),// reset player scores
x=0,h=0,// update player score text containers on page
g.textContent=0,k.textContent=0}// add event listener for play again button
d.addEventListener("click",()=>{// close modal
l.style.display="none",// reset values
S()}),// Launch game
function(){S();// get user choice buttons
let e=document.querySelectorAll(".user-selection-btn");// add event listeners to user choice buttons
e.forEach(e=>{e.addEventListener("click",function(){!function(e){// assign computer choice to variable
let r=v[Math.floor(Math.random()*v.length)],o=function(e,t){let r=`${t} beats ${e}`,o=`${e} beats ${t}`,n=`You both chose ${t}`;return"rock"===e&&"paper"===t||"paper"===e&&"scissors"===t||"scissors"===e&&"rock"===t?(x+=1,["You win the round!",r,e,t]):"rock"===e&&"scissors"===t||"paper"===e&&"rock"===t||"scissors"===e&&"paper"===t?(h+=1,["You lose the round!",o,e,t]):["Tie round",n,e,t]}(r,e);// update player choice images with round result
switch(// update message containers with round reslut messages
m.textContent=o[0],y.textContent=o[1],// update score containers with new scores
g.textContent=x,k.textContent=h,e){case"rock":p.src=/*@__PURE__*/t(c);break;case"paper":p.src=/*@__PURE__*/t(i);break;case"scissors":p.src=/*@__PURE__*/t(a);break;default:p.src=/*@__PURE__*/t(u)}// update computer choice images with round result
switch(r){case"rock":f.src=/*@__PURE__*/t(c);break;case"paper":f.src=/*@__PURE__*/t(i);break;case"scissors":f.src=/*@__PURE__*/t(a);break;default:f.src=/*@__PURE__*/t(u)}(5===x||5===h)&&(// close modal
l.style.display="block",x>h?b.textContent="You Won!":b.textContent="You Lost!")}(this.value)})})}();//# sourceMappingURL=index.e733ea77.js.map

//# sourceMappingURL=index.e733ea77.js.map

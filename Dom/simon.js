let gameSeq = [];
let userSeq = [];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function () {
   if(started==false){
    console.log("game is started");
    started=true;
   }

   levelUp();
});

function levelUp() {
      level++;
      h2.innerText=`level ${level}`;

   let randomIndex=Math.floor(Math.random() * 3);
   let randomColor=btns[randomIndex];
   let randomBtn=document.querySelector(`.${randomColor}`);
   // console.log(randomIndex);
   // console.log(randomColor);
   // console.log(randomBtn)
      btnFlash(randomBtn);
}
function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function (){
      btn.classList.remove("flash")
   ,3000});
}

function btnPress(){
   let btn=this;
   btnFlash(btn);
   console.log(this);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of btns){
   btn.addEventListener("click",btnPress);
}
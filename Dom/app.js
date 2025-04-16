// let smallImages=document.getElementsByClassName("oldImg");
// for(let i=0;i<=smallImages.length;i++){
//     smallImages[i].src="assests/spiderman_img.png";
//     console.log(`value of image no. ${i}  is changed`)
// }
// console.log(document.querySelector("p"));
// console.log(document.querySelector("#description"));
// console.log(document.querySelectorAll("div a"));
// console.dir(getElementBy)

let button=document.createElement('button');
let input=document.createElement("input");
button.innerText="click me";

document.querySelector(".box").append(input);
document.querySelector("body").append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");
// let btn=document.querySelector("#btn");


let h1=document.createElement('h1');
h1.innerHTML="<u>dom pratice</u>";
document.querySelector("body").append(h1);

let p=document.createElement('p');
p.innerHTML="apna college <b>Delta batch</b>";
document.querySelector('body').append(p);
// let btn=document.querySelector("button");

// btn.addEventListener("click",function green() {
//     btn.style.backgroundColor="green";
//     console.log("button was clicked");
// });

let h2=document.querySelector("h2");
let input=document.querySelector("input");

input.addEventListener("input",function (event) {
  
    let validName=input.value.replace(/[^a-zA-Z ]/g, "");

    h2.innerText=validName;
   

})
let input=document.querySelector("input");

input.addEventListener("input",function(event){

    console.log("code = ",event.code)
    if(event.code=="ArrowDown"){
        console.log("character moved downwards");
    }
})
let h3=document.querySelector("h3").innerText="ya budddy light weight";
let p=body.document.createElement('p');
p.innerHTML="Apna college <b>Delta Batch</b>";
document.querySelector('body').append(p);
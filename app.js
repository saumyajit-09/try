// let day = 5;
// switch (day) {
//     case 1:
//         console.log("mon");
//         break;
//     case 2:
//         console.log("tue");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log("thu");
//         break;
//     case 5:
//         console.log("fri");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log("sun");
//         break;

//     default:
//         console.log("invalid no!");
//         break;
// }
// let num=10;
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad no");
// }
// let name1 = prompt("enter your name");
// let age = prompt("enter your age");
// alert(`name is ${name1 } and age is ${age}`);
// let str = "aeroplane";
// if ((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
//     console.log("good string");
// }
// else {
//     console.log("bad string");
// }
// let num1=112;
// let num2=11;
// let num3=12;
// if((num1>num2) && (num1>num3)){
//     console.log(`${num1} is the largest no`);
// }
// else if((num2>num1) && (num2>num3)){
//     console.log(`${num2} is the largest no`);
// }
// else if((num3>num2) && (num3>num1)){
//     console.log(`${num3} is the largest no`);
// }
// let firstNo=12342;
// let secondNo=64724872;
// if((firstNo%10) == (secondNo%10)){
//     console.log(`they have the same last digit which is ${firstNo%10}`)
// }
// else{
//     console.log(`they does't have the same last no`)
// }
// let msg=" hello  ";

// let arr=[-2,8,9,10,-2];
// for (let i = 0; i <=array.length; i++) {
//     if(arr%2==0){
//         console.log(arr);
//     }


// }
// let str1=prompt("please enter a string");
// if(str.length==0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }
// let char = 'b';
// if (char == char.toLowerCase()) {
//     console.log("character is lower case");
// }
// else {
//     console.log("uppercase");
// }

// let str3 = "njksdhgsydghs";
// search == k;
// if (str3.indexOf(search) != 1) {
//     console.log("found!");
// }
// else {
//     console.log("not found");
// }
// const movie = "avater";
// let guess = prompt("guess my fav movie");
// while ((guess != movie) && (guess != "quit")) {
//     guess = prompt("wrong guess,try again");
// }
// if (guess == movie) {
//     console.log("congrates!!");
// }
// else {
//     console.log("you quit");
// }
//finding the greatest no in an array
// let arr=[2,3,45,67,36,96,4,47,99,56];
// let biggestNo=0;
// for (let i = 0; i <= arr.length; i++) {
//    if(arr[i]>biggestNo){
//     biggestNo=arr[i];
//    }

// }
//factorial of a no
// let no=5
// let f=1;
// for (let i = 1; i <=no; i++) {
//     f=f*i;

// }
// console.log(`factorial of the no is ${f}`);
//sum of the digits
// let n=3457;
// let s=0;
// let c=n;
// while(c>0){
//     d=n%10;
//     s=s+d;
// c=Math.floor(c/10);
// }
// console.log(`the sum od the digits are ${s}`);


// let max = prompt("enter the max no");

// const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

// let guess = prompt("guess the no");

// while (true) {

//     if (guess == "quit") {
//         console.log("you quit");
//         break;
//     }
//     if (guess == random) {
//         console.log("congrats you are a batman"); 
//         break;
//     } 
//     else if(guess<random){
//         prompt("your guess was too small");
//     }
//     else {
//        prompt("your no is too big")}

// }


//creating random no represting a dice(1 to 6)
// let dice=Math.floor(Math.random() * 5) + 1;
// console.log(dice)
// let guess=prompt("guess the dice no");

// while (true) {
//     if (guess=="quit") {
//         console.log("you failed to save Gotum");
//         console.log("you are not a batman");
//         break;
//     }
//     guess = Number(guess); // Convert the guess to a number

//     if(guess==dice){
//         console.log("Justiceeee!!! for Gotum");
//         break;
//     }
//     else if(guess<dice){
//         prompt("enter a bigger no");
//     }
//     else{
//         prompt("enter a smaller no");
//     }
// }
// let obj={
//     car:"BMW",
//     model:"M5",
//     color:"BLACK",
//     price:"1.2cr"
// };
// function poem() {
//     console.log("i am batman");
//     console.log("justiceeee ");
//     console.log("for Gotum!!!");
// }
//     poem();

// function random() {
//    let num= Math.floor(Math.random()*6)+1;
//     console.log(`the random no is ${num}`)
// }
// random();

// function printName(name,age) {
//     console.log(`${name} abd age is ${age}`);
// }
// printName("sradha",23);
// printName("tapshi",23);
// printName("karan");

// function sum(a,b) {
//    console.log(a+b);
// }
// sum(2,3);
// sum(5,3);
// sum(8989489274,38847);

//average of three no with function
// function avg(a,b,c){
//     console.log(` average of three numbers is ${(a+b+c)/3}  `);
// }
// avg(2,4,6);
// avg(50,45,50);

//multiplication table using functions
// function table(n){
//     for (let i = n; i <=n*10; i=i+n) {
//         console.log(i);

//     }
// }
// table(2);


//function to calculate all no from 1 to n

// function sumOfNo(n) {
//     let sum=0;
//     for(let i=1;i<=n;i++){

//         sum=sum+i;
//     }
//     return sum;
// }

// let str=["hi","hello","yabuddy","light weight"];
// function concat(str) {
//     let result;
//     for(let i=0;i<str.length;i++){
//         result=result+str[i];
//     }
//     return result;
// }

//what will be the output
//  let greet="hello";

//  function ChangeGreet(){
//     let greet ="namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//  }
//  console.log(greet);
//  ChangeGreet();

//  let sum2=function (a,b) {
//     console.log(a+b);
//  }
//  sum2(2,3);


//  function oddEvenfactory(request){
//     if(request=="odd"){
//     let odd=function(n){
//         console.log(!(n%2==0));
//      }
//     }
//     else if(request=="even"){
//      let even=function(n){
//         console.log(n%2==0);
//      }}
//      else{
//         console.log("wrong request");
//      }
//  }
//  let request="even";

//program to generate a random number within a range(start/end)
//   let range=function(start,end){
//     let generate=Math.floor(Math.random()*start+1);
//     if((generate==start )||(generate<=9)){
//         console.log(`the random no bwteen ${start} and ${end} is ${generate}`);
//     }

//   }
// range(6,10);

//program of function to count numbers of vouwels in a string

function count(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (
            str.charAt(i) === "a" ||
            str.charAt(i) === "e" ||
            str.charAt(i) === "i" ||
            str.charAt(i) === "o" ||
            str.charAt(i) === "u"
        ) {
            count++;
        }
    }
    return count;
}

let str = "apnacollege"; // Predefined string
let vowelCount = count(str);
console.log("The number of vowels is:", vowelCount);

//function that returns the largest name of a country
 const arr = ["germany", "sweden", "japan", "america", "dubai"];

function largest() {
    let largestName = ""; // Store the largest country name
    let maxLength = 0; // Store the length of the longest name

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            largestName = arr[i]; // Update the largest country name
        }
    }
    return largestName; // Return the largest country name
}

console.log(largest()); // Output the result

//largest no in an arr using function

let num=[1,2,3,4,55,6,78,98];
 function largestNo() {
    let largestno=0;

    for (let i = 0; i < num.length; i++) {
       if(num[i]>largestno){
         largestno=num[i];

       }
    }
    return largestno;

 }
 console.log(largestNo());

const student={
    name:"sam",
    age:22,
    eng:89,
    java:76,
    html:100,
    getAvg(){
        let avg=(this.eng+this.java+this.html)/3;

        console.log(`${this.name} got an avg marks of ${avg}`)
    }
}
// student();
//try and catch
try {
    console.log("hi");
} catch (error) {
    console.log("there was an error in try 5005")
}

//arrow function
// const func() =>{console.log("batman")};
const sum=(a,b)=>{
    console.log(a+b);
}
setTimeout(
    ()=>{
        console.log("apna college");
    },4000
);

const square=(n)=>n*n;
console.log(square(4));

let id=setInterval(
    ()=>{console.log("hello world");},2000
);
setTimeout(
    ()=>{clearInterval(id);}
,10000);

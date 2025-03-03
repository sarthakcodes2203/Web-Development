// document.title="Sarthak's"
// alert("Hello wrold");
// console.log("Hey I am Consle...")

// var a = prompt("Enter your number")
// console.log("Your number is ",a)

// var isTrue=confirm("Are you sure you wanna die?")
// if(isTrue){
//     console.log("dead")
// }
// else{
//     console.log("Alive :)")
// }

// let a=prompt("Enter first number")
// let b=prompt("Enter second number")
// let sum=parseInt(a)+parseInt(b)
// console.log('The sum is',sum);

// //variables >>>
// var a=5;                     //Static
// var b=6;
// console.log(a+b+5)
// var c="sarthak";
// console.log(typeof a,typeof b,typeof c);
// const d=55;                  //Constant
// let e=20;                    //Global

// //Datatypes >>>
// let a="Sarthak ";
// let b=22;
// let c=3.55;
// const d=true;
// let e=undefined;
// let f=null;
// console.log(a, b, c ,d ,e ,f)
// console.log(typeof a, typeof b, typeof c ,typeof d ,typeof e ,typeof f);

// //Objects >>>
// let o={
//     "name":"sarthak",
//     "job code":5600,
//     job:"AI"
// }
// console.log(o)
// o.salary="20k";
// console.log(o)

// //conditions >>>
// let age=45;
// if(age>18){
//     console.log("you can drive")
// }
// else if(age==18){
//     console.log("you can barely drive")
// }
// else{
//     console.log("You cannot drive")
// }

// //for loops >>>
// for(let i=0; i<10;i++){
//     console.log(i)
// }
// let obj={
//     "name":"sarthak",
//     "job code":5600,
//     job:"AI"
// }
// for (const key in obj) {
//     console.log(key)
// }
// for (const c of "sarthak") {
//     console.log(c)
// }

// //while loops >>>
// let j=0
// while(j<6){
//     console.log(j)
//     j++
// }
// k=0
// do {
//     console.log(k)
// } while (k<6);

// //Funcions >>>
// const f=()=>{
//     console.log("Arrow Function")
// }
// f()

// function sum(a=4,b=6) {
//     return(a+b)
// }
// console.log( sum(5,4) )

// //Strings >>>
// str="sarthak"
// console.log(str)
// console.log(str[0])
// console.log(str[6])
// console.log(str[7])
// console.log(str.slice(1,5))
// console.log(str.replace("ar","22"))
// console.log(str.concat(" ch"))
// console.log(str)
// console.log(str.length)
// let a="xzy"
// let b="pqr"
// console.log(`His name is ${a} and her name is ${b}`)

// //Arrays >>>
// let arr=[11,2,66,4,95]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[5])
// console.log(arr.toString())
// console.log(arr.pop(3))
// console.log(arr.push(100))
// console.log(arr.shift(200))
// console.log(arr.unshift(200))
// console.log(Array.from("sarthak"))

// arr.forEach((value,index,arr)=> {
//     console.log(value,index,arr)
// });

// for (const iterator of arr) {
//     console.log(iterator)
// }

// let newarr=arr.map((e)=>{
//     return e**2
// })
// console.log(newarr)

// console.log(arr.filter((e)=>{
//     if(e>7){
//     return true
//     }
//     return false
// }))

// const reducee=(a,b)=>{
//     return a+b
// }
// console.log(arr.reduce(reducee))



// //Document Object Model (DOM)>>>
// document.designMode="on"
// console.log(document.title)
// console.log(document.body)
// console.log(document.body.styl e.backgroundColor="green")

// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.firstElementChild.firstElementChild)
// console.log(document.body.textContent)

// //Attributes>>>
// console.log(a.getAttribute("class"))
// console.log(a.hasAttribute("class"))
// console.log(a.hasAttribute("style"))
// console.log(a.attributes)
// a.setAttribute("hidden","true")
// a.removeAttribute("class")
// console.log(a.dataset);
// console.log(a.dataset.d1);
// console.log(a.dataset.d2);

// //ID selector>>>
// let x=document.getElementsByClassName("box")
// console.log(x)
// x[2].style.backgroundcolor="red "

// //CSS selector>>>
// document.querySelector(".box").style.backgroundColor="green"
// document.querySelectorAll(".box")
// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e)
// })

// console.log(document.querySelector(".container").innerHTML)
// console.log(document.querySelector(".container").outerHTML)
// console.log(document.querySelector(".container").innerText)
// console.log(document.querySelector(".container").textContent)
// console.log(document.querySelector(".container").dataset)

// let d=document.createElement("div")
// d.innerHTML="Inserted successfully!!"
// d.setAttribute("class","created")
// document.querySelector(".container").append(d)

// document.querySelector(".box").remove()


// //Events>>>
// let a=document.getElementsByClassName("contains")[0]
// a.onclick =(()=>{
//     let b=document.getElementsByClassName("contains")[0]
//     b.innerHTML="Hello"
// })

// let bt= document.getElementById("btn")
// bt.addEventListener("dblclick",()=>{
//     alert("i was clicked")
//     document.querySelector(".box").innerHTML="Clicked"
// })
// bt.addEventListener("click",()=>{
//     alert("i was clicked")
//     document.querySelector(".box").innerHTML="Clicked2"
// })
// bt.addEventListener("contextmenu",()=>{
//     alert("Right clicked")
// })

// let x=function(){
//     alert('Nothing 18+ here :)')
// }
// if (prompt("Are you 18+? (Y/N)")=='Y'){
//     bt.addEventListener("click",x)
// }


// document.querySelector(".child").addEventListener("click",(e)=>{
//         alert("Child was clicked")   
//         e.stopPropagation()
//     })
// document.querySelector(".childcontainer").addEventListener("click",()=>{
//     alert("Childcontainer was clicked")
//     })
// document.querySelector(".container1").addEventListener("click",()=>{
//         alert("container was clicked")
//     })

// setInterval(() => {
//     alert("ALERT...")
// }, 3000);

// setTimeout(() => {
//     alert ("Alert!!!")
// }, 3000);



// //Call backs >>>
// It is the concept of passing a function as a parameter to another function.
// I can pass the different alternate argument(which is a function here) to the superior funtion as per requirment.
// const callback =((arg)=>{
//     console.log(arg);
// })
// const  loadscript =((src,callback)=>{
//     let sc=document.createElement("script")
//     sc.src=src
//     sc.onload= callback("sarthak")
//     sc.onerror=callback("Some error occured")
//     document.head.append(sc)
// })
// loadscript("https://",callback)
// loadscript("htpts://",callback)


// //Promises >>>
// function getdata(){
//     return new Promise((resolve,reject)=>{
//         resolve(355)
//         // reject("Rejected!!")
//     })
// }
// console.log('Load data');
// let data=getdata()
// data.then (()=>{
//     console.log(data);
//     console.log('Process data');
// })

// let prom1= new Promise((resolve,reject) =>{
//     let a = Math.random()
//     if(a>0.5){
//         reject('No random number doesnt support you');
//     }
//     else{
//         setTimeout (()=>{
//             console.log('Yes I am done')
//             resolve("sarthak")
//         },3000)
//     }
// })
// prom1.then((x)=>{               // For resolved promise 
//     console.log(x)
// })               
// prom1.catch ((err)=>{           // For rejected promise 
// console.log(err);
// })               //If i am interested only in errors, i can use null as first argument, ie, then(null,f) or i can use catch as ease

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Hey I am not resolved');
//         resolve(1)
//     }, 2000);
// })
// p1.then(()=>{
//     console.log('Hey I am resolved');
// })
// p1.then (()=>{
//     console.log('Hurray');
// })

// //Promise API>>>
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("value 1")
//         // reject(new Error("Error"))
//     }, 2000);
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("value 2")
//     }, 2000);
// })
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("value 3")
//     }, 2000);
// })

// Handlings=>
// p1.then ((value)=>{
//     console.log(value);
// })
// p2.then ((value)=>{
//     console.log(value);
// })
// p3.then ((value)=>{
//     console.log(value);
// })
//or
// let promiseAll1=Promise.all([p1,p2,p3])         //Runs for all resolved promises in the max time between them and does not runs if either of them has reject in them
// let promiseAll2=Promise.allSettled([p1,p2,p3])  //Runs even if there is a rejected promise 
// let promiseAll3=Promise.race([p1,p2,p3])        //Runs the promise which takes minimum followed by greater and does not runs if either of them has reject in them
// let promiseAll4=Promise.any([p1,p2,p3])         //Runs even if there is a rejected promise
// let promiseAll5=Promise.resolve(6)
// let promiseAll6=Promise.reject(new Error("Hey"))
// promiseAll3.then ((value)=>{
//     console.log(value);
// })


// //Async & Await >>>
// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout =(()=>{
//         resolve(355)
//         },3000)
//     })
// }
// async function getdata2(){
//     console.log('Load data');
//     let data= await getdata()
//     console.log(data);
//     console.log('Process data');
// }
// getdata2()

// async function func(){
//     let delhiWeather=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("34deg")
//         }, 3000);
//     })
//     let kolkataWeather=new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("23deg")
//         }, 7000);
//     })
//     console.log('Fetching Delhi Weather Please wait...');
//     let delhiW=await delhiWeather
//     console.log('Fetched Delhi weather'+delhiW);
//     console.log('Fetching Kolkata Weather Please wait...');
//     let kolkataW=await kolkataWeather
//     console.log('Fetched Kolkata weather'+kolkataW);   
// }
// console.log('Welcome to Weather control room');
// let a=func()
// a.then ((value)=>{
//     console.log(value);
// })


// //Try&Catch >>>
// let a=prompt("Enter first number")
// let b=prompt("Enter second number")
// let sum=parseInt(a)+parseInt(b)
// try {
//     // console.log('The sum is',sum*x);
//     throw new Error("this is a new error")
// } catch (error) {
//     console.log('Error found');
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }finally{
//     console.log('Finnally executed');
// }

// let a=prompt("Enter first number")
// let b=prompt("Enter second number")
// if(isNaN(a)||isNaN(b)){
//     throw Error("Sorry this is not allowed")
// }
// let sum=parseInt(a)+parseInt(b)
// console.log('The sum is',sum);


// //Imediately Invoked Function Expressed(IIFE) >>>
// async function sleep(){
//     return new Promise((resolve,reject )=>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }
// (async function main(){
//     let a=await sleep()
//     console.log(a);
//     let b=await sleep()
//     console.log(b);
// })


// //Spread Operator(...) >>>
// let [x,y,...rest]=[1,4,3,7,9,10]
// console.log(x,y,rest);

// let arr=[1,4,3,7,9,10]
// console.log(...arr);

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b}=obj
// console.log(a,b);


// //Cookies>>>
// console.log(document.cookie);                                                    //For displayiing the cookies of the page

// document.cookie="name=sarthak"                                                   //For adding cookie
// document.cookie="name2=sarthak2"                                                 //For adding cookie   #One at a time!!
// let key=prompt("Enter your key")
// let value=prompt("Enter your value")
// document.cookie=`${key}=${value}`                                                //For adding cookies at runtime
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`        //For including special characters
// console.log(decodeURIComponent('%23%23pq'));                                     //For displaying the encoded component
// console.log(document.cookie);


// //Local Storage>>>                           //Stores key-value pairs, Storage remains with the page even if reloaded or reopened in diff tab
// let key=prompt("Enter your key to set")
// let value=prompt("Enter your value to set")
// localStorage.setItem(key,value)
// console.log( localStorage.getItem(key));
// if(key==5){
//     localStorage.removeItem(key)
// }
// if(key==0){
//     localStorage.clear()
// }

// //Session Storage>>>                         //Stores key-value pairs, Storage remains with page reload but destroyed when reopened in diff tab 
// sessionStorage.setItem("name","sarthak")
// sessionStorage.getItem("name")

// //Storage event>>>
// window.onstorage=((e)=>{
//     alert("Changed")
//     console.log(e);
// })








let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let buttonArr = Array.from(buttons);
let string = "";

  buttonArr.forEach((btn) =>{
  

    btn.addEventListener("click",e =>{

if(e.target.innerHTML =="DEL"){
    string = string.substring(0,string.length-1)
    display.value = string;
}else if(e.target.innerHTML =="AC"){
    string = "";
    display.value = string;
}else if(e.target.innerHTML =="="){
    string = eval(string)
    display.value=string;
}
else{
    string += e.target.innerHTML
    display.value = string;
};
 
});

});









































 























  






















































































// console.log(randomNumber)
// if(randomNumber % 2 ===0){
//     console.log("system have generated even number now " + randomNumber)
// }else{
//     console.log("system have generated odd number this time! " + randomNumber)
// }
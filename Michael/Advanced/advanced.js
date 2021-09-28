var circ=document.getElementById("circle");//selecting the circle
//the functions for hovering over and leaving the circle until line 12
function hoverFunction() {
    let msg=document.getElementById("message");
    msg.style.backgroundColor="green";
    msg.innerHTML="You are in the circle!"
}
function leaveFunction() {
    let msg=document.getElementById("message");
    msg.style.backgroundColor="red";
    msg.innerHTML="You are outside the circle!"
}
//the functions for changing the background until line 19
function bgGrey() {
    circ.style.backgroundColor="grey";
}
function bgBlue() {
    circ.style.backgroundColor="blue";
}
//adding the events
circ.addEventListener("mouseover",hoverFunction);
circ.addEventListener("mouseleave",leaveFunction);
circ.addEventListener("click",bgGrey);
circ.addEventListener("dblclick",bgBlue);
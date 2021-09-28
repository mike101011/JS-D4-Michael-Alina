var player1=prompt("Enter name of player 1: ");
var player2=prompt("Enter name of player 2: ");
var heading=document.getElementsByClassName("announcement")[0];
heading.innerHTML=`${player1} vs ${player2}`;
var blue=document.getElementById("mz-blue");
var red=document.getElementById("mz-red");
red.style.display="none";
function roll() {
    return Math.floor(Math.random()*6+1);
}
var left=0;
var right=0;
function pOne() {
    blue.style.display="none";
    left=roll();
    let result= document.getElementById("l-result");
    result.innerHTML=left;
    red.style.display="initial"
    
}
function pTwo() {
    red.style.display="none";
    right=roll();
    let result= document.getElementById("r-result");
    result.innerHTML=right;
    var final=document.getElementsByClassName("announcement")[1];
    switch (true) {
        case (left<right):
            final.innerHTML=`${player2} wins!`;
            break;
        case(left>right):
        final.innerHTML=`${player1} wins!`; 
        break;   
        default:
            final.innerHTML="Draw!";
    }
}
blue.addEventListener("click",pOne);
red.addEventListener("click",pTwo);
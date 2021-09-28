var pics=document.getElementsByClassName('mz-santa');
function changeFunction(){
    for (let j = 0; j < pics.length; j++) {
    pics[j].style.transition="1s";
    pics[j].style.opacity="0";
    
}
    //  this.style.opacity="0";
    //  this.style.transition="1s";
 }
for (let j = 0; j < pics.length; j++) {
    pics[j].addEventListener("click",changeFunction);
    
}
// document.body.style.backgroundColor="blue";
function rand() {
    return Math.floor(Math.random()*256);
}
function changeBg() {
    let v1=rand();
    let v2=rand();
    let v3=rand();
    let z=`rgb(${v1},${v2},${v3})`
    document.body.style.backgroundColor=z;
}
let elButton=document.getElementById("background-button");
elButton.addEventListener("click",changeBg);
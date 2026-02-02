let centerimage=document.getElementById("center-image-id");
let container=document.getElementById("container-id");
let centerlogotext=document.getElementById("center-logo-text");
let paragraftext=document.getElementById("paragraf-id");
function change_theame(logosrc,color,text,paragraf){
centerimage.src=logosrc;
document.body.style.backgroundColor=color;
container.style.backgroundColor=color;
centerlogotext.textContent=text;
paragraftext.textContent=paragraf;


}
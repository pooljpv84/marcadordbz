var x=0;
var y=0;
var text="";
function sumar1() {
 x++;
    document.getElementById("label-encima").innerHTML = x;
    
}
function sumar2() {
       y++;
       document.getElementById("label-encima2").innerHTML = y;
   }
   function resetall() {
    location.reload();
    document.getElementById("texto-encima").value = text;
    document.getElementById("texto-encima2").value = text;
    
    
    
}
function resetmarker() {
    x=0;
    y=0;
    document.getElementById("label-encima").innerHTML = x;
    document.getElementById("label-encima2").innerHTML = y;
}


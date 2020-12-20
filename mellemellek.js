function bead(szam){
    document.getElementById("mellek").innerHTML = document.getElementById("mellek").innerHTML +szam;
}

function addOssze(){
    var sum = document.getElementById("mellek").innerHTML;
    if(sum){
        document.getElementById("mellek").innerHTML = eval(sum);
    }
}
function torol(){
    document.getElementById("mellek").innerHTML = "";
}
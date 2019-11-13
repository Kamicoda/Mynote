
function save() {
localStorage.userEdits = document.getElementById("edit").innerText;
localStorage.userEdits1 = document.getElementById("edit1").innerText;
localStorage.userEdits2 = document.getElementById("edit2").innerText;
localStorage.userEdits3 = document.getElementById("edit3").innerText;
localStorage.userEdits4 = document.getElementById("edit4").innerText;
localStorage.userEdits5 = document.getElementById("edit5").innerText;
localStorage.userEdits6 = document.getElementById("edit6").innerText;
localStorage.userEdits7 = document.getElementById("edit7").innerText;
localStorage.userEdits8 = document.getElementById("edit8").innerText;
localStorage.userEdits9 = document.getElementById("edit9").innerText;

document.getElementById("update").innerHTML="Edits saved!";
}

function checkEdits() {

if(localStorage.userEdits!=null)
document.getElementById("edit").innerHTML = localStorage.userEdits;
document.getElementById("edit1").innerHTML = localStorage.userEdits1;
document.getElementById("edit2").innerHTML = localStorage.userEdits2;
document.getElementById("edit3").innerHTML = localStorage.userEdits3;
document.getElementById("edit4").innerHTML = localStorage.userEdits4;
document.getElementById("edit5").innerHTML = localStorage.userEdits5;
document.getElementById("edit6").innerHTML = localStorage.userEdits6;
document.getElementById("edit7").innerHTML = localStorage.userEdits7;
document.getElementById("edit8").innerHTML = localStorage.userEdits8;
document.getElementById("edit9").innerHTML = localStorage.userEdits9;
}

//original code idea from https://www.developerdrive.com/allowing-users-to-edit-text-content-with-html5/ 
//with some tweaking


//

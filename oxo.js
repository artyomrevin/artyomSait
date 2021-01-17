var currentPlayer = "о";

function place(box){
    if (box.innerText != "") return;
    box.innerText = currentPlayer;
    if (currentPlayer == "о") {
        currentPlayer = "x";
    } else {
        currentPlayer = "о";
    }
    checkGamerBoard ();
}

function checkGamerBoard () {
    for (let i=0; i<=2; i++ ) {
    var first = document.getElementById ("0_" + i).innerText;
    var second = document.getElementById ("1_" + i).innerText;
    var third = document.getElementById ("2_" + i).innerText;
    if (first == "") continue;
    if (first == second && first == third) {
        alert ("Победитель!");
    }
    }
}
for (let i=0; i<=2; i++ ) {
var first = document.getElementById (i + "_0" ).innerText;
var second = document.getElementById (i + "_1").innerText;
var third = document.getElementById (i + "_2").innerText;
if (first == "") continue;
  if (first == second && first == third) {
    alert ("Победитель!");
}
}
var first01

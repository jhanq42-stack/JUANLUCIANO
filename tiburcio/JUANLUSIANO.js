/*
var a = 10;
var b = 20;
var suma = a + b;

document.write(suma);
document.write("<br>");

var clave = true;
var nota = 14;

if (nota <= 15.5 && nota >= 0) {
    document.write("Aprobado con " + nota);
} else {
    document.write("Desaprobado con " + nota);
}
*/

var numdia = document.getElementById("caja");

function enviar() {
    var ndia = numdia.value;

    document.getElementById("resultado").innerHTML = ndia;
}

document.getElementById("boton").addEventListener("click", enviar);

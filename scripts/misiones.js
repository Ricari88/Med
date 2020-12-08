"use strict"

var misiones = document.querySelector("#misiones");

var mision = ["sistema solar", "mundial", "local", "personal"];

mision.forEach(element => {
    misiones.innerHTML += `<div class='mision' id='${element}'>${element.toUpperCase()}</div>`
});


"use strict"

var misiones = document.querySelector("#misiones");

var mision = ["uno", "dos", "tres", "cuatro"];

mision.forEach(element => {
    misiones.innerHTML += `<div class='mision' id='${element}'>${element.toUpperCase()}</div>`
});


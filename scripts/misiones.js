var misiones = document.querySelector("#misiones");

var mision = ["uno", "dos", "tres", "cuatro"];

mision.forEach(element => {
    misiones.innerHTML += `<button class='mision' id='${element}'>${element.toUpperCase()}</button>`
});


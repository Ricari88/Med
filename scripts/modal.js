var misiones = document.querySelector("#misiones");

// var mision = ["uno", "dos", "tres", "cuatro"];

// mision.forEach(element => {
//     misiones.innerHTML += `<button class='mision' id='${element}'>${element.toUpperCase()}</button>`
// });
//creatins¡g the missions


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal



var mision = ["uno", "dos", "tres", "cuatro"];

mision.forEach(element => {
    misiones.innerHTML += `<button class='mision' id='${element}'>${element.toUpperCase()}</button>`

    var btn = document.getElementById(`${element}`);

    console.log(btn)
    console.log(element)

    btn.onclick = function() {
        modal.style.display = "block";
      }

      // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
});





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var info = document.querySelector("#misionInfo");
//info.innerHTML=`<img class="modalImg" src="./media/galaxy.jpeg"><br/>`;

for(let i=0;i<30;i++){
    info.innerHTML += `${i}.- Informacion de la mision<br/>`;
}

var enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function(){
    alert("informacion enviada")
})
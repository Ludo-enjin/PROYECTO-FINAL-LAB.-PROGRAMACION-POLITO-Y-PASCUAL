let nivel = 1;
let vidas = 3;
let preguntaActual = 0;
let puntos = 0;
let pregunta = document.getElementById("pregunta");
let respuesta;
let opcion1 = document.getElementById("opcion1")
let opcion2 = document.getElementById("opcion2")
let opcion3 = document.getElementById("opcion3")
let opcion4 = document.getElementById("opcion4")

function comenzarJuego() {
  //document.getElementById("inicio").style.display = "none";
  //document.getElementById("juego").style.display = "block";



  pregunta.innerHTML = "esta es la primera pregunta";
  opcion1.innerHTML = "Esta es la opcion 1";
  opcion2.innerHTML = "Esta es la opcion 2";
  opcion3.innerHTML = "Esta es la opcion 3";
  opcion4.innerHTML = "Esta es la opcion 4";
}

function ComprobarRespuestas() {
  let respuestaJugador = document.getElementById("respuesta").value;
  let respuestaCorrecta = preguntas

}

comenzarJuego()
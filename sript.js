let nivel = 1;
let vidas = 1;
let preguntaActual = 0;
let puntos = 0;
let pregunta = document.getElementById("pregunta");
let respuesta;
let resultado;
let botonesOpciones = [
  document.getElementById("opcion1"),
  document.getElementById("opcion2"),
  document.getElementById("opcion3"),
  document.getElementById("opcion4")
]
let preguntas = [
  {
    pregunta: "¿Cual es el verdadero nombre del Duende Verde?",
    opciones: ["Otto Octavius", "Norman Osborn", "Eddie Brock", "Harry Osborn"],
    correcta: "Curt Connors"
  },
  {
    pregunta: "¿Cual era el nombre del cientifico que creo un suero el cual lo transformo en lagarto?",
    opciones: ["Otto Octavius", "Norman Osborn", "Eddie Brock", "Curt Connors"],
    correcta: "Curt Connors"
  },
  {
    pregunta: "¿Que Simbionte acompaño a Venom como villano en la serie Spiderman Unlimited?",
    opciones: ["Riot", "Toxin", "Scream", "Carnage"],
    correcta: "Carnage"
  },
  {
    pregunta: "¿Quien de los villanos fundó a los 6 siniestros?",
    opciones: ["Doctor Octopus", "Electro", "Misterio", "Scorpion"],
    correcta: "Doctor Octopus"
  },
]

function comenzarJuego() {
  //document.getElementById("inicio").style.display = "none";
  //document.getElementById("juego").style.display = "block";
  pregunta.innerHTML = preguntas[0].pregunta;
  opcion1.innerHTML = preguntas[0].opciones[0];
  opcion2.innerHTML = preguntas[0].opciones[1];
  opcion3.innerHTML = preguntas[0].opciones[2];
  opcion4.innerHTML = preguntas[0].opciones[3];

  
  botonesOpciones.forEach((boton) => {
    boton.addEventListener("click", () => {
      ComprobarRespuestas(boton)
    })
  })
}

function ComprobarRespuestas(botonElegido) {
  console.log(botonElegido.textContent) // Tenemos un texto con la respuesta que eligio el usuario. falta implementar un if que lo compare con 
  // la respuesta correcta de la pregunta actual preguntas[numeroPreguntaActual].correcta
  let respuestaJugador = document.getElementById("respuesta").value;
  let respuestaCorrecta = preguntas
}



comenzarJuego()
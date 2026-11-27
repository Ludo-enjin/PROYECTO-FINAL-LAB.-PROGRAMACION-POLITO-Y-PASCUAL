const popup = document.getElementById("popup");
const boton = document.getElementById("BotonSiguienteNivel");

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
    correcta: "Norman Osborn"
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
  popup.close()
  //document.getElementById("inicio").style.display = "none";
  //document.getElementById("juego").style.display = "block";
  pregunta.innerHTML = preguntas[0].pregunta;
  opcion1.innerHTML = preguntas[0].opciones[0];
  opcion2.innerHTML = preguntas[0].opciones[1];
  opcion3.innerHTML = preguntas[0].opciones[2];
  opcion4.innerHTML = preguntas[0].opciones[3];
}

function siguinteNivel() {
  preguntaActual = 0;
  preguntas2 = [
    {
    pregunta: "¿Cómo se llama el mejor amigo de Peter Parker en muchas versiones?",
    opciones: ["Eddie Brock", "Flash Thompson", "Harry Osborn", "Ned Leeds"],
    correcta: "Harry Osborn"
  },
  {
    pregunta: "¿Qué villano no tiene un disfraz o un traje?",
    opciones: ["Electro", "Sandman", "Mysterio", "Rhino"],
    correcta: "Sandman"
  },
  {
    pregunta: "¿Qué poder especial tiene Miles Morales que Peter Parker normalmente no tiene?",
    opciones: ["Invisibilidad y descarga eléctrica", "Control del fuego", "Súper velocidad", "Teletransportación"],
    correcta: "Invisibilidad y descarga eléctrica"
  },
  {
    pregunta: "¿Cómo se llama el villano conocido como el Buitre?",
    opciones: ["Quentin Beck", "Wilson Fisk", "Aleksei Sytsevich", "Adrian Toomes"],
    correcta: "Adrian Toomes"
  },

  ]

  function ComenzarNivel2() {
  popup.close()
  boton.addEventListener("click", () => {
    window.location.href = "Nivel2.html";
  //document.getElementById("inicio").style.display = "none";
  //document.getElementById("juego").style.display = "block";
  pregunta.innerHTML = preguntas2[0].pregunta;
  opcion1.innerHTML = preguntas2[0].opciones[4];
  opcion2.innerHTML = preguntas2[0].opciones[5];
  opcion3.innerHTML = preguntas2[0].opciones[6];
  opcion4.innerHTML = preguntas2[0].opciones[7];

}
  }

function siguientePregunta() {
  pregunta.innerHTML = preguntas[preguntaActual].pregunta;
  document.getElementById("popup").close();
  opcion1.innerHTML = preguntas[preguntaActual].opciones[0];
  opcion2.innerHTML = preguntas[preguntaActual].opciones[1];
  opcion3.innerHTML = preguntas[preguntaActual].opciones[2];
  opcion4.innerHTML = preguntas[preguntaActual].opciones[3];
}


function ComprobarRespuestas(botonElegido) {
  console.log(botonElegido.textContent) // Tenemos un texto con la respuesta que eligio el usuario. falta implementar un if que lo compare con 
  // la respuesta correcta de la pregunta actual preguntas[numeroPreguntaActual].correcta
  let respuestaJugador = botonElegido.textContent;
  let respuestaCorrecta = preguntas[preguntaActual].correcta;
  if (respuestaJugador == respuestaCorrecta) {
    mostrarRespuesta(true)
    preguntaActual += 1;
  }
  else {
    mostrarRespuesta(false)
    preguntaActual = 0;
    correcta = 0;
  }
}



comenzarJuego()

function mostrarRespuesta(es_correcto) {
  console.log(es_correcto);
  if (es_correcto) {
    popup.showModal();
    popup.innerHTML =
      `<h4>Correcto</h4> 
     <button id="BotonSiguientePregunta">Siguiente Pregunta</button>`;
    document.getElementById("BotonSiguientePregunta").addEventListener("click", siguientePregunta);
   

  } else {
    popup.showModal();
    popup.innerHTML =
      `<h4>Incorrecto</h4>
    <button id="volverIntentar">Intentar de nuevo</button>`

    document.getElementById("volverIntentar").addEventListener("click", comenzarJuego);

  }

   if(preguntaActual == 4){
      `<h4>Correcto</h4> 
     <button id="BotonSiguienteNivel">Siguiente Nivel</button>`;
  }

}

botonesOpciones.forEach((boton) => {
  boton.addEventListener("click", () => {
    ComprobarRespuestas(boton)
  })
});

document.getElementById("BotonSiguienteNivel").addEventListener("click", ComenzarNivel2);
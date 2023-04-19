//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
  nombre: "Dami",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Nhoa",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

var comparaAtaq1 = jugadorUno.habilidades.ataque;
var comparaAtaq2 = jugadorDos.habilidades.ataque;

if (comparaAtaq1 > comparaAtaq2){
  contadorPuntosJug1++;
} else if (comparaAtaq2 > comparaAtaq1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)
//var comparaVel = jugadorUno.velocidad
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
  contadorPuntosJug1++;
} else if (jugadorDos.habilidades.velocidad > jugadorUno.habilidades.velocidad) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
  contadorPuntosJug1++;
} else if (jugadorDos.habilidades.vida > jugadorUno.habilidades.vida) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
  contadorPuntosJug1++;
} else if (jugadorDos.habilidades.magia > jugadorUno.habilidades.magia) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)
var artP1 = parseInt(jugadorUno.articulos);
var artP2 = parseInt(jugadorDos.articulos);
if (artP1 > artP2){
  contadorPuntosJug1++;
} else if (artP2 > artP1) {
  contadorPuntosJug2++;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

// ejemplo:
// var resultado = {
//  [nombreDeJug1]: contadorPuntosJug1,
//  [nombreDeJug2]: contadorPuntosJug2,
//  ganador: nombreDeJug1
// }
// console.log(resultado)
//-----------------------------------------------------------------------//
if (contadorPuntosJug1 > contadorPuntosJug2){
  winnerName = jugadorUno.nombre;
} else if (contadorPuntosJug2 > contadorPuntosJug1){
  winnerName = jugadorDos.nombre;
} else {
  winnerName = "Empate";
}
var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: winnerName,
}
console.log(resultado)
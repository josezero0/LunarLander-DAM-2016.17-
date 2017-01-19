//Declaración de variables
var altura = 10;
var velocidad = 0;
var gravedad = 1.622;
var aceleracion = gravedad;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;
//Fin de la declaración de variables

window.onload = function () {

    //Mostrar el menú del móvil
    document.getElementById("showm").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "block"; //1. Display block del menú
        stop(); //2. Parar la nave
    };

    document.getElementById("hidem").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "none"; //1. Display none del menú
        start(); //2. Reanudar el movimiento de la nave
    };

    document.onclick = function () {
        if (aceleracion == gravedad) {
            morotOn();
        } else {
            motorOff();
        }
    };

    document.onkeydown = motorOn;
    document.onkeyup = motorOff;

    start();

};

// Inicia el movimiento de la nave
function start() {
    timer = setInterval(function () {
        moverNave();
    }
    , dt * 1000);
}

//Parar la nave
function stop() {
    clearInterval(timer);
}

function moverNave() {
    //Si ya ha llegado al suelo no mueve la nave
    if(altura >= 70){
        return;
    }
    // Actualiza la velocidad
    velocidad += aceleracion * dt;
    document.getElementById("velocidad").innerHTML = velocidad.toFixed(2);
    // Actualiza la altura
    altura += velocidad * dt;
    document.getElementById("altura").innerHTML = (70 - altura).toFixed(2);
    //Si la altura es menor a 70 mueve la nave
    if (altura < 70) {
        document.getElementById("nave").style.top = altura + "%";
    } else {
        document.getElementById("altura").innerHTML = "0";
        if(altura > 70 && velocidad > 1.5){
            document.getElementById("inave").src = "img/cohete2.png";
        }
        stop();
    }
}

function motorOn() {
    if(fuel <= 0){
        return;
    }
    aceleracion = -gravedad;
    if (timerFuel == null) {
        timerFuel = setInterval(function () {
            actualizarFuel();
        }, 10);
    }
}

function motorOff() {
    if(altura > 70 && velocidad > 1.5){
        document.getElementById("inave").src = "img/cohete2.png";
        return;
    }
    aceleracion = gravedad;
    document.getElementById("inave").src = "img/cohete0.png";
    clearInterval(timerFuel);
    timerFuel = null;
}

function actualizarFuel() {
    if(fuel<=0){
        document.getElementById("fuel").innerHTML = 0;
        return;
    }
    if(altura >= 70){
        return;
    }
    document.getElementById("inave").src = "img/cohete1.png";
    fuel -= 0.1;
    document.getElementById("fuel").innerHTML = fuel.toFixed(2);
}
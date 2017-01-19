var altura = 10;
var velocidad = 0;
var gravedad = 1.622;
var aceleracion = gravedad;
var dt = 0.016683;
var fuel = 100;
var timer = null;
var timerFuel = null;
var limiteVelocidad = 1.5;
var sinFuel = false;
var sinAltura = false;
var cohete = null;
var endGame = false;
var pausa = false;

window.onload = function () {

    /**
     * Muestra el menu del movil.
     * Ejecuta la funcion <code>stop()</code> para pausar la partida.
     * @returns {undefined}
     */
    document.getElementById("showm").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "block";
        stop();
        pausa = true;
    };

    /**
     * Oculta el menu del movil.
     * Ejecuta la funcion <code>start()</code> para reanudar la partida.
     * @returns {undefined}
     */
    document.getElementById("hidem").onclick = function () {
        document.getElementsByClassName("c")[0].style.display = "none";
        start();
        pausa = false;
    };

    /**
     * Activa o desactiva el motor de la nave al hacer click
     * en algun lugar de la pantalla.
     * @returns {undefined}
     */
    document.onclick = function () {
        if (aceleracion === gravedad) {
            motorOn();
        } else {
            motorOff();
        }
    };

    document.onkeydown = motorOn; //activar motor
    document.onkeyup = motorOff; //desactivar motor

    start(); //inicia la partida

};

/**
 * Inicia la partida desde el ultimo punto.
 * @returns {undefined}
 */
function start() {
    timer = setInterval(function () {
        moverNave();
    }, dt * 1000);
}
;

/**
 * Para el movimiento de la nave.
 * @returns {undefined}
 */
function stop() {
    clearInterval(timer);
}
;

function again() {
    altura = 10;
    velocidad = 0;
    fuel = 100;
    aceleracion = -gravedad;
    timer = null;
    timerFuel = null;
    sinFuel = false;
    sinAltura = false;
    pausa = false;
    cohete = "img/cohete0.png";
    endGame = false;
    setAltura();
    setAlturaTop();
    setFuel();
    setVelocidad();
    setCohete();
    document.getElementsByClassName("d")[0].style.display = "none";
    start();
}

/**
 * Trata el movimiento de la nave: actualizacion de velocidad y altura.
 * Si llega a la altura limite ejecuta la funcion de <code>finJuego</code>.
 * @returns {undefined}
 */
function moverNave() {
    if (sinAltura === true) {
        return;
    }
    velocidad += aceleracion * dt;
    setVelocidad();
    altura += velocidad * dt;
    setAltura();
    if (sinAltura === false) {
        setAlturaTop();
    } else {
        finJuego();
    }
}

/**
 * Establece que es el final del juego.
 * Comprueba si la velocidad de la nave en el momento de aterrizar
 * esta dentro del limite establecido.
 * Bloquea el movimiento de la nave.
 * @returns {undefined}
 */
function finJuego() {
    endGame = true;
    document.getElementsByClassName("d")[0].style.display = "block";
    if (velocidad > limiteVelocidad) {
        cohete = "img/cohete2.png";
        setCohete();
        document.getElementsByClassName("lose")[0].style.display = "block";
        document.getElementsByClassName("lose")[1].style.display = "block";
    } else {
        document.getElementsByClassName("win")[0].style.display = "block";
        document.getElementsByClassName("win")[1].style.display = "block";
    }

    stop();
}

/**
 * Cuando se encienda el motor ejecutara la funcion <code>actualizarFuel</code>,
 * siempre y cuando no sea el final del juego y aun disponga de fuel.
 * @returns {undefined}
 */
function motorOn() {
    if (endGame === true || sinFuel === true) {
        return;
    }
    aceleracion = -gravedad;
    if (timerFuel === null) {
        timerFuel = setInterval(function () {
            actualizarFuel();
        }, 10);
    }
}
;

/**
 * Cuando se apague el motor se mostrara la imagen de la nave con el motor apagado
 * y la nave aumentara su velocidad de manera positiva.
 * Si el juego ha acabado no hace nada.
 * @returns {undefined}
 */
function motorOff() {
    if (endGame === true) {
        return;
    }
    cohete = "img/cohete0.png";
    setCohete();
    aceleracion = gravedad;
    clearInterval(timerFuel);
    timerFuel = null;
}
;

/**
 * Actualiza el fuel de la nave, siempre y cuando tenga fuel y no haya aterrizado,
 * en este caso mostrara la imagen del cohete con el motor encendido.
 * En caso de no tener fuel o bien ya haya aterrizado no se modificara el fuel.
 * @returns {undefined}
 */
function actualizarFuel() {
    if (sinFuel === true || sinAltura === true || pausa === true) {
        return;
    }
    cohete = "img/cohete1.png";
    setCohete();
    fuel -= 0.1;
    setFuel();
}
;

/**
 * Establece el fuel de la nave en el HTML.
 * Si el fuel de la nave se agota activa <code>sinFuel = true</code>.
 * @returns {undefined}
 */
function setFuel() {
    document.getElementById("fuel").innerHTML = fuel.toFixed(2);
    if (fuel <= 0) {
        document.getElementById("fuel").innerHTML = 0;
        sinFuel = true;
    }
}
;

/**
 * Establece la altura de la nave en el HTML.
 * Si la altura de la nave (respecto el top) es superior a 70
 * la nave a entrado en contacto con la superficie de la luna,
 * activa <code>sinAltura = true</code>.
 * @returns {undefined}
 */
function setAltura() {
    document.getElementById("altura").innerHTML = (70 - altura).toFixed(2);
    if (altura >= 70) {
        document.getElementById("altura").innerHTML = 0;
        sinAltura = true;
    }
}
;

/**
 * Establece la posicion (altura) de la nave respecto al top de la pantalla.
 * @returns {undefined}
 */
function setAlturaTop() {
    document.getElementById("nave").style.top = altura + "%";
}

/**
 * Establece la velocidad de la nave en el HTML.
 * @returns {undefined}
 */
function setVelocidad() {
    document.getElementById("velocidad").innerHTML = velocidad.toFixed(2);
}
;

/**
 * Establece la imagen del cohete.
 * @returns {undefined}
 */
function setCohete() {
    document.getElementById("inave").src = cohete;
}
;

function tratarPausa(){
    if(pausa===true){
        pausa = false;
        start();
    }else{
        pausa = true;
        stop();
    }
}
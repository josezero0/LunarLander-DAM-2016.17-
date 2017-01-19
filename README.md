# LunarLander DAM 2016.17

Desarrollado por **Jose David Pérez Cañellas**.

Basado en el proyecto de **Miguel Urbina**. [Lunar Lander](https://github.com/urbinapro/lunar-landing-javascript)

Versión de código **minify** tranformado con [minifycode](http://minifycode.com/)

## Descripción del proyecto

El proyecto consta de 3 páginas .html, de 2 ficheros .css y de 1 fichero .js:

- index.html
- instrucciones.html
- about.html
- d.css
- m.css
- script.js

### index.html

Página dónde podemos encontrar los elementos importantes del juego: la nave, el panel de información y el menú de opciones.

La nave ocupa el centro de la pantalla. Está situada a un 10% del top de la pantalla, descenderá hasta llegar al 70% del top de la pantalla.

Dispongo de 3 imágenes de la nave: nave con motor apagado, nave con motor encendido y nave explotada. Las 3 imágenes tienen una resolución de 130x200px.

El panel de control situado en la esquina superior izquierda de la pantalla nos da la información relevante a la nave: velocidad, fuel y altura.

La velocidad máxima para aterrizar es 1.5 m/s.

El fuel tiene un límite de 100 que irá disminuyendo a medida que utilicemos el propulsor de la nave.

La altura irá disminuyendo a medida que la nave se vaya acercando a la luna, si al llegar a altura 0 la nave tiene una velocidad superior a la mencionada anteriormente 1.5 m/s la nave explotará, por otro lado, si lo conseguimos la nave aterrizará correctamente.

El menú de opciones de la esquina superior derecha de la pantalla nos permite: pausar el juego en cualquier momento, mostrar las instrucciones del juego y mostrar información sobre el juego. De igual manera que el botón de pausa para el juego, volverlo a pulsar reanuda el juego.

### instrucciones.html

Página dónde podemos encontrar información sobre cómo jugar y cual es el objetivo del juego: aterrizar la nave con la menor velocidad de alunizaje posible para no explotar.

### about.html

Página dónde podemos encontrar información sobre el juego, su desarrollador y otra información documental técnica.

### d.css

Versión de estilos css para escritorios. Acepta dispositivos con pantallas de 961px de ancho mínimo.

### m.css

Versión de estilos css para móviles. Acepta dispositivos con pantallas de 960px de ancho máximo.

### script.js

Fichero javascript que contiene la mayor parte de los cambios de esta nueva versión.

Este fichero tiene varias funciones que juntas permiten hacer aterrizar la nave en la superficie de la luna o explotando dependiendo de la velocidad de la nave.

Al cargar la ventana cargarán una serie de funciones:

- Mostrar/Ocultar el menú del móvil

- Hacer click sobre la pantalla para activar/desactivar el motor de la nave

- Detectar cualquier botón pulsado para activar/desactivar el motor de la nave

- Iniciar la caída automática de la nave hacía la luna


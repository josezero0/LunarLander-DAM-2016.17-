# LunarLander DAM 2016.17

Desarrollado por **Jose David Pérez Cañellas**.

<<<<<<< HEAD
Versión de código **minify** tranformado con [minifycode](http://minifycode.com/)

=======
>>>>>>> refs/remotes/origin/master
El proyecto contiene 3 páginas HTML y 1 CSS responsive:

* index.html
* about.html
* instruction.html
* theme.css

##index.html

Está página está dividida en 3 capas verticales, cada una de ellas ocula el 33.3% de la pantalla.

###Capa izquierda

En la capa de la izquierda se encuentra la información relevante a la partida:

* Fuel
* Velocidad
* Altura

####Fuel

Este indicador medirá la cantidad de combustible del que dispone la nave para aterrizar.

Cuando se quede sin fuel la nave ya no podrá activar el propulsor.

####Velocidad

Este indicador medirá la velocidad a la que la nave está cayendo a la luna.

Esta velocidad irá en aumento, por lo que el usuario deberá activar el propulsor para frenar la nave.

Tiene que aterrizar con la menor velocidad de caida posible para poder aterrizar con éxito.

####Altura

La altura midirá la distancia entre la nave y la superficie de aterrizaje de la luna.

Al llegar a 0 dependiendo de la velocidad de caida en aquel momento la nave explotará o aterrizará con éxito.

###Capa central

En esta capa hay un div que ocupa el 15% x 20%.

Dentro de dicho div hay únicamente una imagen del cohere que ocupa el 100% del div.

###Capa derecha

Esta capa contiene las opciones del juego.

####Pausa

Esta opción del juego pone el juego en pausa, para la nave.

Cuando quiera el usuario podrá volver a darle al play para continuar la partida.

####Opciones

Es un menú desplegable para la versión de ordenador (pantallas con una anchura superior a 800px), para las versiones móviles es una lista de elementos siempre visible (pantallas con una anchura inferior a 800px).

####About

Muestra información sobre el juego, su desarrollador, su diseñador y gráficos.

####Instrucciones

Muestra las instrucciones del juego, su funcionamiento y objetivo.

##about.html

Capa centrada que ocupa un 80% x 80% de la pantalla en la versión de ordenador y un 100% de la pantalla con el texto centrado en la versión de móviles.

##instruction.html

Capa que ocupa todo el ancho de la pantalla y un 80% del alto de la misma.

Muestra las instrucciones del juego centradas en la pantalla. Además, se dispone de las instrucciones en 2 idiomas: español e inglés.

Al clickar sobre un idioma se mostrarán las instrucciones en dicho idioma y se ocultarán las del idioma activo.

##Nota:

**Tanto en el about.html como en instruction.html se puede volver al index.html para empezar una partida**

##theme.css

Hoja de estilos responsive. Detecta cuando una pantalla es inferior a 800px de anchura y le aplica unos estilos específicos. De igual manera con las pantallas de mayor tamaño.

Esta hoja de estilos incluye todos los estilos de las 3 páginas html ya mencionadas.

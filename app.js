javascript
// =========================================
// PIXELZONE - FUNCIONES INTERACTIVAS
// =========================================


// =========================================
// BOTÓN PRINCIPAL
// =========================================

const botonAccion = document.getElementById("btn-accion");

if (botonAccion) {

    botonAccion.addEventListener("click", function () {

        alert(
            "🎮 ¡Bienvenido a PixelZone!\n\n" +
            "Tu próxima aventura comienza aquí."
        );

    });

}


// =========================================
// BOTÓN DE COMUNIDAD
// =========================================

const botonComunidad = document.getElementById("btn-comunidad");

if (botonComunidad) {

    botonComunidad.addEventListener("click", function () {

        alert(
            "👾 ¡Bienvenido a la comunidad PixelZone!\n\n" +
            "Pronto tendremos nuevas funciones para jugadores."
        );

    });

}


// =========================================
// BOTONES DE JUEGOS
// =========================================

const botonesJuego = document.querySelectorAll(".game-button");

botonesJuego.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const tarjeta = boton.closest(".game-card");

        const nombreJuego =
            tarjeta.querySelector("h3").textContent;

        alert(
            "🎮 " +
            nombreJuego +
            "\n\n" +
            "Has seleccionado este juego."
        );

    });

});


// =========================================
// MENSAJE EN CONSOLA
// =========================================

console.log("🎮 PixelZone cargado correctamente.");
console.log("⚡ JavaScript funcionando correctamente.");

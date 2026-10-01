document.addEventListener('DOMContentLoaded', () => {
    // Confirmación en consola de que el script se cargó correctamente
    console.log("Módulo JS cargado exitosamente en Gaming_Storee.");

    // Función para mostrar un saludo interactivo en la tienda
    const mostrarSaludo = () => {
        alert("¡Bienvenido a Gaming_Storee! Explora nuestros productos.");
    };

    // Ejemplo de enlace a un botón (si el HTML del Estudiante 1 incluye un botón con id 'btn-saludo')
    const botonInteractivo = document.getElementById('btn-saludo');
    
    if (botonInteractivo) {
        botonInteractivo.addEventListener('click', mostrarSaludo);
    }
});
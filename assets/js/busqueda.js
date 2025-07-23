const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase(); // Convierte el texto ingresado a mayúsculas
    const elements = document.querySelectorAll("body *"); // Selecciona todos los elementos del body
    let found = false; // Bandera para verificar si se encontró algo

    elements.forEach((el) => {
        // Evita ocultar el campo de búsqueda, el botón y el mensaje de "No se encontraron resultados"
        if (el.id === "search" || el.id === "no-results" || el.closest(".search-container")) {
            return;
        }

        // Verifica si el texto del elemento contiene el filtro
        if (el.textContent && el.textContent.toUpperCase().includes(filter)) {
            el.style.display = ""; // Muestra el elemento si coincide
            found = true;
        } else if (el.tagName !== "SCRIPT" && el.tagName !== "STYLE") {
            el.style.display = "none"; // Oculta el elemento si no coincide
        }
    });

    // Muestra el mensaje si no se encontraron resultados
    const noResults = document.querySelector("#no-results");
    if (!found) {
        noResults.style.display = "block"; // Muestra el mensaje
    } else {
        noResults.style.display = "none"; // Oculta el mensaje si hay resultados
    }
};
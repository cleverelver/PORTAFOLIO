let indice = 0;

function moverCarrusel(direction) {
    const items = document.querySelectorAll('.icono');
    indice += direction;

    // Ciclar a través de los elementos
    if (indice >= items.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = items.length - 1;
    }

    const offset = -indice * (items[0].clientWidth + 20);
    document.querySelector('.carrusel-items').style.transform = `translateX(${offset}px)`;
}
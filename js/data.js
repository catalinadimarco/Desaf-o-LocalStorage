window.addEventListener('load', function() {
    // Recupera el dato de localStorage
    let storedData = localStorage.getItem('userData');

    // Selecciona span donde se mostrará el dato
    let dataElement = document.getElementById('data');

    // Muestra el dato en span
    if (storedData) {
        dataElement.textContent = storedData;
    } else {
        dataElement.textContent = 'No hay datos guardados.';
    }
});

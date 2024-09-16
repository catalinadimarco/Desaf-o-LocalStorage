document.getElementById('buttonText').addEventListener('click', function() {
    // Con esto se obtiene el valor del campo de texto
    const inputValue = document.getElementById('inputText').value;

    // Esto guarda el dato en localStorage
    localStorage.setItem('userData', inputValue);

    //Limpia el campo de texto después de guardar el dato
    document.getElementById('inputText').value = '';
});

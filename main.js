function copyToClipboard(element) {
    // Crea un área de texto temporal
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = element.textContent;
    document.body.appendChild(tempTextArea);

    // Selecciona y copia el texto al portapapeles
    tempTextArea.select();
    document.execCommand('copy');

    // Elimina el área de texto temporal
    document.body.removeChild(tempTextArea);

    // Muestra el mensaje de copiado
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'inline';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2500); // Oculta el mensaje después de 1.5 segundos
}







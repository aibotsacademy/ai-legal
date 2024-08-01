document.addEventListener('DOMContentLoaded', function() {
    const text = "Bienvenido aiTuring";
    const typewriterElement = document.getElementById('typewriter');
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Ajusta el tiempo para cambiar la velocidad de 'escritura'
        }
    }
    typeWriter();
});

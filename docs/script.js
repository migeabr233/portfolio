//Animacion
window.onload = function() {
    var animatedText = document.getElementById('animated-text');
    var animationDuration = 10 * 1000; // 10 segundos en milisegundos

    function restartAnimation() {
        animatedText.style.animation = 'none';
        animatedText.offsetHeight; /* Truco para reiniciar la animación */
        animatedText.style.animation = null;
    }

    setInterval(restartAnimation, animationDuration);
};
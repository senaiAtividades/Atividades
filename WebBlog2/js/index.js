let numSlide = 1;
    mostrar(numSlide);
    function passarSlide(n) {
        mostrar(numSlide += n);
    }
    function slideAtual(n) {
        mostrar(numSlide = n);
    }
    function mostrar(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let pontos = document.getElementsByClassName("ponto");
        if (n > slides.length) {numSlide = 1}
        if (n < 1) {numSlide = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < pontos.length; i++) {
            pontos[i].className = pontos[i].className.replace(" active", "");
        }
        slides[numSlide-1].style.display = "block";
        pontos[numSlide-1].className += " active";
    }
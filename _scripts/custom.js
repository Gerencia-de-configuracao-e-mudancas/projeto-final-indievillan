(function ($) {
    "use strict";

    // NAVBAR
    $(".nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Melhoria: Intersection Observer para menu sticky (mais performático)
    const navbar = document.querySelector(".navbar");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                // Se a navbar não está visível
                navbar.classList.add("sticky-nav");
            } else {
                navbar.classList.remove("sticky-nav");
            }
        },
        { rootMargin: "-100px 0px 0px 0px" } // Ajuste o rootMargin conforme necessário
    );
    observer.observe(document.querySelector(".hero")); // Observa a seção hero
})(window.jQuery);

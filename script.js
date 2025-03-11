document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("stars");
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(star);
    }
    
    let mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");
    mensaje.innerText = "Hola Mundo";
    document.body.appendChild(mensaje);

    let cuadrado = document.querySelector(".cuadrado");
    if (cuadrado) {
        let observer = new MutationObserver(() => {
            let computedStyle = window.getComputedStyle(cuadrado);
            mensaje.style.transform = computedStyle.transform;
        });
        observer.observe(cuadrado, { attributes: true, attributeFilter: ['style'] });
    }
});

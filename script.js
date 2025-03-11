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
    
    // Animación zigzag
    let positionX = 0;
    let positionY = 0;
    let directionX = 1;
    let zigzagHeight = 50; // Altura del zigzag
    let speed = 2;
    
    function animateZigzag() {
        // Movimiento horizontal
        positionX += speed * directionX;
        
        // Movimiento vertical en zigzag
        positionY = Math.sin(positionX * 0.05) * zigzagHeight + window.innerHeight / 2;
    
        // Actualizar posición
        mensaje.style.left = positionX + 'px';
        mensaje.style.top = positionY + 'px';
    
        // Rebote en los bordes
        if (positionX > window.innerWidth - mensaje.offsetWidth || positionX < 0) {
            directionX *= -1;
        }
    
        requestAnimationFrame(animateZigzag);
    });
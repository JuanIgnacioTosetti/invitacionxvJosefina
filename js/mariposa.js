function crearMariposa() {
    const mariposa = document.createElement("div");
    mariposa.classList.add("mariposa");
  
    mariposa.style.backgroundImage = "url('./img/mariposa.png')";
    
    // Inicia las mariposas fuera de la pantalla en el lado izquierdo.
    mariposa.style.left = '-60px';
    mariposa.style.top = Math.random() * 100 + "vh";
  
    document.body.appendChild(mariposa);
  
    gsap.to(mariposa, {
      duration: 10 + Math.random() * 5, // Duración aleatoria entre 10 y 15 segundos.
      x: "110vw", // Hace que la mariposa se mueva completamente a través de la pantalla y más allá.
      ease: "power1.inOut",
      onComplete: function() {
        mariposa.remove(); // Una vez que la mariposa ha terminado su animación, la eliminamos.
      }
    });
  }
  
  // Crea 5 mariposas para empezar
  for (let i = 0; i < 5; i++) {
    crearMariposa();
  }
  
  // Crea una mariposa adicional cada 5 segundos
  setInterval(crearMariposa, 5000);
  
window.onload = function() {
    var lastY = 0;
    var swipeBtn = document.getElementById("swipe-btn");
    var section1 = document.getElementById("home");
    var section2 = document.getElementById("lugar");
  
    // Agrega un controlador de eventos de desplazamiento táctil que muestra/oculta el botón de swipe
    window.addEventListener("touchmove", function(event) {
      var currentY = event.touches[0].clientY;
      if (currentY > lastY) {
        // El usuario se está desplazando hacia abajo
        swipeBtn.style.opacity = "0";
      } else {
        // El usuario se está desplazando hacia arriba
        swipeBtn.style.opacity = "1";
      }
      lastY = currentY;
    });
  
    // Agrega un controlador de eventos de desplazamiento táctil que oculta el botón de swipe después del desplazamiento
    window.addEventListener("touchend", function() {
      swipeBtn.style.opacity = "0";
    });
  
    // Agrega un controlador de eventos de desplazamiento que muestra/oculta el botón de swipe
    window.addEventListener("scroll", function() {
      var section1Top = section1.offsetTop;
      var section1Bottom = section1Top + section1.offsetHeight;
      var windowBottom = window.pageYOffset + window.innerHeight;
      if (windowBottom > section1Top && windowBottom < section1Bottom) {
        swipeBtn.style.opacity = "1";
      } else {
        swipeBtn.style.opacity = "0";
      }
    });
  };
  
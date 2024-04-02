// const playBtn = document.getElementById("play-btn");
//   const audio = document.getElementById("audio");
//   let isPlaying = false;

//   playBtn.addEventListener("click", function() {
//     if (isPlaying) {
//       // Si está reproduciendo, pausa la música y cambia el botón a "play"
//       audio.pause();
//       playBtn.innerHTML = '<i class="fa fa-play"></i>';
//       isPlaying = false;
//     } else {
//       // Si está en pausa, reproduce la música y cambia el botón a "pausa"
//       audio.play();
//       playBtn.innerHTML = '<i class="fa fa-pause"></i>';
//       isPlaying = true;
//     }
//   });


  document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audio");
    const playButton = document.getElementById("play-btn");
  
    playButton.addEventListener("click", function() {
      if (audioElement.paused) {
        audioElement.play();
        playButton.innerHTML = '<i class="fa fa-pause"></i>'; // Cambia el ícono a "pause"
      } else {
        audioElement.pause();
        playButton.innerHTML = '<i class="fa fa-play"></i>'; // Cambia el ícono a "play"
      }
    });
    
  });
  
  const audioElement = document.getElementById("audio");
const muteButton = document.getElementById("mute-btn");

muteButton.addEventListener("click", function() {
    if (audioElement.muted) {
      audioElement.muted = false;
      muteButton.innerHTML = 'Sonido activado';
    } else {
      audioElement.muted = true;
      muteButton.innerHTML = 'Sonido desactivado';
    }
});


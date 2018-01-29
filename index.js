cheet('pikachu', function () {
    window.setTimeout(openMouth, 200);
      playPikachu();
});

function playPikachu() {
    var pikachu = document.getElementById('audio');
    audio.play();
}

function openMouth() {
    var mouth = document.getElementById('open');
    mouth.classList.add('active');
    window.setTimeout(function() {
        mouth.classList.remove('active');
    }, 1500);
}
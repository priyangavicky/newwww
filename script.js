document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var isAudioPlaying = localStorage.getItem('isAudioPlaying');
    
    if (isAudioPlaying == 'true') {
      audio.play();
    }
})
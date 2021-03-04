(function($){
    play    = $('#play');
    pause   = $('#pause');
    stop    = $('#stop');
    volup   = $('#volup');
    voldown = $('#voldown');

    //Song
    song    = new Audio();
    song.type= 'audio/mpeg';
    song.src='music/music1.mp3';
})(jQuery);

play.click(function (e) {
    e.preventDefault();
    song.play();
});

pause.click(function (e) {
    e.preventDefault();
    song.pause();
});

stop.click(function (e) {
    e.preventDefault();
    song.pause();
    song.currentTime = 0;
});

volup.click(function (e) {
    e.preventDefault();
    if(song.volume < 1){
        song.volume += 0.05;
    }else{
        song.volume = 1;
    }
});

voldown.click(function (e) {
    e.preventDefault();
    if(song.volume > 0){
        song.volume -= 0.05;
    }else{
        song.volume = 0;
    }
});
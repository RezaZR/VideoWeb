$('#table').DataTable();

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;
var player3;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('video1', {
        videoId: 'NLVE4ZxGDWs',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player2 = new YT.Player('video2', {
        videoId: 'NLVE4ZxGDWs',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player3 = new YT.Player('video3', {
        videoId: 'NLVE4ZxGDWs',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player1.stopVideo();
    player2.stopVideo();
    player3.stopVideo();
}
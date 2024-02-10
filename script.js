/* let progressLine = document.getElementById("progress-line"); NAPRAWIC!!!!!!!!
let progressTime = 0; // progress line will "flow" proportionally to song time */
let playAudio = document.getElementById("play-audio");

let ind = 0; // index for tracking song's number
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let song6 = document.getElementById("song6");

let songTable = ["songs/Desperate.wav", "songs/NewYearNewMe.wav", "songs/Purpose.wav", "songs/TakeOff.wav", "songs/Grateful.mp3", "songs/OneShot.mp3"]

// changing play and pause buttons
function changePlayAndPause () {
    let changePlay = document.getElementById("bigger-play-btn");
    // using inludes method -> if img src includes string "play" (in this case it's play.png),
    // then change it to pause (so pause.png), otherwise go back to play.png
    if (changePlay.src.includes("play")) {
        changePlay.src = "images/pause.png";
        playSong();
        songProgressLine();
    } else {
        changePlay.src = "images/play.png";
        pauseSong();
        songProgressLine();
    }

}

// playing/pausing songs using play/pause button
function playSong () {
    playAudio.play();
}

function pauseSong () {
    playAudio.pause();
}

// progress line TUTAJJJJJJJJJJJJJJ filmik - Implementacja funkcji odtwarzania i pauzowania utworów / od 15:00
/* function songProgressLine () {
    progressLine.offsetWidth = 0; // start of the progress when song starts
    let id = setInterval(progress,5); // 2nd arg is pace of video playback - flow

    function progress() {
        if(playAudio.readyState) { // if song starts playing
            progressTime = (playAudio.currentTime*220)/playAudio.duration;
            progressLine.style.width = progressTime;
        }
    }
} */ 

/* playing next song by using "next" button */   // ?????????????????????????????????????????
function firstSong () {
    ind = 0;
    playAudio.src = songTable[0];
    song1.classList.add("song-change");
    playSong();
    // tutaj to z progress line
}

function secondSong () {
    ind = 1;
    playAudio.src = songTable[1];
    song2.classList.add("song-change");
    playSong();
    // tutaj to z progress line
}

function playNextSong () {
    ++ind;
    switch (ind) {
        case 0:
            firstSong();
            break;
        case 1:
            secondSong();
            break;
    }
    
}
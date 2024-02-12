let ind = 0; // index for tracking song's number
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");
let song6 = document.getElementById("song6");

let songs = [song1, song2, song3, song4, song5, song6];
let songTable = ["songs/Desperate.wav", "songs/NewYearNewMe.wav", "songs/Purpose.wav", "songs/TakeOff.wav", "songs/Grateful.mp3", "songs/OneShot.mp3"]
/* let progressLine = document.getElementById("progress-line"); NAPRAWIC!!!!!!!!
let progressTime = 0; // progress line will "flow" proportionally to song time */
let playAudio = document.getElementById("play-audio");
let songCover = document.getElementById("current-song-cover");
let speaker = document.getElementById("mute-unmute");

// changing play and pause buttons
let changePlay = document.getElementById("bigger-play-btn");
function changePlayAndPause () {
    // using inludes method -> if img src includes string "play" (in this case it's play.png),
    // then change it to pause (so pause.png), otherwise go back to play.png
    if (changePlay.src.includes("play")) {
        changePlay.src = "images/pause.png";
        playSong();
        // songProgressLine();
    } else {
        changePlay.src = "images/play.png";
        pauseSong();
        // songProgressLine();
    }
    
}

// playing/pausing songs using play/pause button
function playSong () {
    playAudio.play();

    for(let i=0; i<=5; i++) { // played song has different text color
        if(ind==i) { // ZMIENIA SIE COVER OD RAZU ALE TO DOPIERO JAK KLIKNE PRZYCISK PAUZA/PLAY 
            songs[i].classList.remove("song-title"); 
            songs[i].classList.add("song-change");
        } else {
            songs[i].classList.remove("song-change");
            songs[i].classList.add("song-title");
        };
    }
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

/* songs and it's covers changing */
function firstSong () {
    ind = 0;
    playAudio.src = songTable[0];

    songCover.src = "images/song1.png";

    changePlayAndPause ();
    // tutaj to z progress line
}

function secondSong () {
    ind = 1;
    playAudio.src = songTable[1];

    songCover.src = "images/song2.png";

    changePlayAndPause ();
}

function thirdSong () {
    ind = 2;
    playAudio.src = songTable[2];

    songCover.src = "images/song3.png";

    changePlayAndPause ();
}

function fourthSong () {
    ind = 3;
    playAudio.src = songTable[3];

    songCover.src = "images/song4.png";

    changePlayAndPause ();
}

function fifthSong () {
    ind = 4;
    playAudio.src = songTable[4];

    songCover.src = "images/song5.png";

    changePlayAndPause ();
}

function sixthSong () {
    ind = 5;
    playAudio.src = songTable[5];

    songCover.src = "images/song6.png";

    changePlayAndPause ();
}

/* playing next song by using "next" button TUTAJ NAPRAWIC   */
function playNextSong () {
    ++ind;
    switch (ind) {
        case 0:
            firstSong();
            break;
        case 1:
            secondSong();
            break;
        case 2:
            thirdSong();
            break;
        case 3:
            fourthSong();
            break;
        case 4:
            fifthSong();
            break;
        case 5:
            sixthSong();
            break;
        default :
            if(ind >= 6) {
                ind = 0;
            }
    }
    
}

/* playing previous song by using "prev" button */
function playPrevSong () {
    --ind;
    switch (ind) {
        case 0:
            firstSong();
            break;
        case 1:
            secondSong();
            break;
        case 2:
            thirdSong();
            break;
        case 3:
            fourthSong();
            break;
        case 4:
            fifthSong();
            break;
        case 5:
            sixthSong();
            break;
        default :
            if(ind < 0) {
                ind = 0;
            }
    }
    
}

/* changing speaker button to mute/unmute */
function changeSpeaker () {
    if (speaker.src.includes("unmute")) {
        speaker.src = "images/mute.png";
        playAudio.muted = true;
    } else {
        speaker.src = "images/unmute.png";
        playAudio.muted = false;
    }
}
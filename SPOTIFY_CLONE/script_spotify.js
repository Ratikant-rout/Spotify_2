console.log("script_spotify.js loaded");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio(); // Create an audio element
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('my-progress-bar');
let songs = [
    {
        SongName: "Let Me Love You",
        filepath: "song/1.mp3",
        coverpath: "DJSnakeLetMeLoveYou.jpg"
    },
    {
        SongName: "Shershaah - Raataan Lambiyan",
        filepath: "song/2.mp3",
        coverpath: "song2.jpg"
    },
    {
        SongName: "Best Of Rajesh Khanna",
        filepath: "song/3.mp3",
        coverpath: "song3.jpg"
    },
    {
        SongName: "Best Of Kishore Kumar",
        filepath: "song/4.mp3",
        coverpath: "song4.jpg"
    },
    {
        SongName: "Friday_songs",
        filepath: "song/5.mp3",
        coverpath: "song5.jpg"
    }
    // Add more songs as needed
];

// Function to load a song
function loadSong(songIndex) {
    audioElement.src = songs[songIndex].filepath;
}

// Function to play or pause the audio
function togglePlayPause() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
    }
}

// Event listener for play/pause button click
masterplay.addEventListener('click', togglePlayPause);

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const tracks = [
    {
        title: 'Track 1',
        artist: 'Artist 1',
        src: 'kallolam.mp3'
    },
    {
        title: 'Track 2',
        artist: 'Artist 2',
        src: 'hanuman chalisa.mp3'
    }
    // Add more tracks as needed
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    title.textContent = track.title;
    artist.textContent = track.artist;
    audio.src = track.src;
    audio.load();
}

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress() {
    audio.currentTime = (progress.value / 100) * audio.duration;
}

function setVolume() {
    audio.volume = volume.value;
}

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextTrack);

loadTrack(currentTrackIndex);
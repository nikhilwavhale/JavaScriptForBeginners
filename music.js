let audio = new Audio();
let isPlaying = false;
let currentTrack = 0;
let tracks = [
    { file: 'song1.mp3', title: 'Song 1', artist: 'Artist 1', albumArt: 'album1.jpg' },
    { file: 'song2.mp3', title: 'Song 2', artist: 'Artist 2', albumArt: 'album2.jpg' },
    { file: 'song3.mp3', title: 'Song 3', artist: 'Artist 3', albumArt: 'album3.jpg' }
];

document.getElementById('play-btn').addEventListener('click', togglePlay);
document.getElementById('prev-btn').addEventListener('click', prevTrack);
document.getElementById('next-btn').addEventListener('click', nextTrack);
document.getElementById('progress').addEventListener('input', updateProgress);
document.getElementById('volume').addEventListener('input', updateVolume);

function loadTrack(file, title, artist, albumArt) {
    audio.src = file;
    document.getElementById('track-name').textContent = title;
    document.getElementById('artist-name').textContent = artist;
    document.getElementById('album-art').src = albumArt;
    audio.load();
    audio.volume = document.getElementById('volume').value;
    updateDuration();
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        document.getElementById('play-btn').textContent = 'Play';
    } else {
        audio.play();
        document.getElementById('play-btn').textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(tracks[currentTrack].file, tracks[currentTrack].title, tracks[currentTrack].artist, tracks[currentTrack].albumArt);
    audio.play();
    document.getElementById('play-btn').textContent = 'Pause';
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(tracks[currentTrack].file, tracks[currentTrack].title, tracks[currentTrack].artist, tracks[currentTrack].albumArt);
    audio.play();
    document.getElementById('play-btn').textContent = 'Pause';
}

function updateProgress() {
    let progress = document.getElementById('progress');
    audio.currentTime = (audio.duration * progress.value) / 100;
}

function updateDuration() {
    audio.addEventListener('loadeddata', () => {
        document.getElementById('duration-time').textContent = formatTime(audio.duration);
    });
}

function updateVolume() {
    audio.volume = document.getElementById('volume').value;
}

audio.addEventListener('timeupdate', function () {
    let progress = document.getElementById('progress');
    progress.value = (audio.currentTime / audio.duration) * 100;
    document.getElementById('current-time').textContent = formatTime(audio.currentTime);
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
}

// Initialize with the first track
loadTrack(tracks[0].file, tracks[0].title, tracks[0].artist, tracks[0].albumArt);

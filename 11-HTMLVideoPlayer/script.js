// Variables
const video = document.querySelector('video');
let playVideo = false;

// Displays controls when we hover our mouse over the video
document.querySelector('.video-box').addEventListener('mouseover', (e) => {
  document.querySelector('.controls').classList.add('hover');
});
document.querySelector('.video-box').addEventListener('mouseout', (e) => {
  document.querySelector('.controls').classList.remove('hover');
});

// Event Listeners
document.querySelector('.play').addEventListener('click', toggleVideo);
document.querySelector('.volume').addEventListener('input', handleVolume);
document.querySelector('.playback').addEventListener('input', handlePlayBack);


// Functions
function toggleVideo(event) {
  if (playVideo) {
    video.pause();
  } else {
    video.play();
  }
  playVideo = !playVideo;
}

function handleVolume(event) {
  video.volume = event.target.value;
}

function handlePlayBack(event) {
  video.playbackRate = event.target.value;
}
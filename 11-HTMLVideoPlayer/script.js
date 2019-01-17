// Variables
const video = document.querySelector('video');
const duration = video.duration;

// Displays controls when we hover our mouse over the video
document.querySelector('.video-box').addEventListener('mouseover', (e) => {
  document.querySelector('.controls').classList.add('hover');
});
document.querySelector('.video-box').addEventListener('mouseout', (e) => {
  document.querySelector('.controls').classList.remove('hover');
});

// Event Listeners
document.querySelector('video').addEventListener('click', togglePlay);
document.querySelector('.volume').addEventListener('input', handleVolume);
document.querySelector('.playback').addEventListener('input', handlePlayBack);
document.querySelector('.controls').addEventListener('click', handleTime);


// Functions
function togglePlay(event) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function handleVolume(event) {
  video.volume = event.target.value;
}

function handlePlayBack(event) {
  video.playbackRate = event.target.value;
}

function handleTime(event) {
  if (event.target.value === '10') {
    video.currentTime = `${+video.currentTime - 10}`;
  } else {
    video.currentTime = `${+video.currentTime + 25}`;
  }
}
// Variables
const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-filled');
let mouseDown = false;

// Displays controls when we hover our mouse over the video
document.querySelector('.video-box').addEventListener('mouseover', (e) => {
  document.querySelector('.controls').classList.add('hover');
});
document.querySelector('.video-box').addEventListener('mouseout', (e) => {
  document.querySelector('.controls').classList.remove('hover');
});

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mouseDown && scrub(event));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
document.querySelector('.play').addEventListener('click', togglePlay);
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
  } else if (event.target.value === '25') {
    video.currentTime = `${+video.currentTime + 25}`;
  }
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  
}

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;

}
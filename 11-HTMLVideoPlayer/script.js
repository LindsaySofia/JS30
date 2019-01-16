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


// Functions
function toggleVideo(event) {
  if (playVideo) {
    video.pause();
  } else {
    video.play();
  }
  playVideo = !playVideo;
}
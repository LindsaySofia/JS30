document.querySelector('.video-box').addEventListener('mouseover', (e) => {
  document.querySelector('.controls').classList.add('hover');
});

document.querySelector('.video-box').addEventListener('mouseout', (e) => {
  document.querySelector('.controls').classList.remove('hover');
});
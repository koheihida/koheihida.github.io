(() => {
  const video = document.querySelector('.hero-video');
  const button = document.querySelector('.video-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => {
    button.textContent = video.paused ? '背景動画を再生' : '背景動画を一時停止';
  };
  const play = async () => {
    try { await video.play(); } catch { /* Keep the poster and manual play control. */ }
    update();
  };
  video.muted = true;
  button.hidden = false;
  button.addEventListener('click', () => {
    if (video.paused) void play();
    else video.pause();
  });
  video.addEventListener('play', update);
  video.addEventListener('pause', update);
  video.addEventListener('error', () => { button.hidden = true; });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) video.pause();
  });
  if (!reducedMotion.matches) void play();
})();

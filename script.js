  document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
      container: document.getElementById('line_01'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'lines_01.json'  // твой файл в той же папке
    });
  });

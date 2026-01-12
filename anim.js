document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-lottie]').forEach(el => {
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: el.dataset.lottie
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-lottie-single]').forEach(el => {
        lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: el.dataset.lottieSingle
        });
    });
});

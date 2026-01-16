document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-lottie-hover]').forEach(el => {
        const anim = lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: el.dataset.lottieHover
        });

        el.addEventListener('mouseenter', () => {
            anim.goToAndPlay(0);
        });

        el.addEventListener('mouseleave', () => {
            anim.goToAndStop(0);
        });
    });
});

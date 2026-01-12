function loadLottie(id, jsonFile) {
    lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: jsonFile
    });
}

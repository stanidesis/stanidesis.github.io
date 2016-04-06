function greedyJumbotron(jumbotron) {
    // HAAXX
    if (screen.width >= 768) {
        jumbotron.height = 500;
        return;
    }
    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome on tablet

    var viewportHeight = screen.height;

    window.onresize = function () {
        if (Math.abs(viewportHeight - screen.height) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = screen.height;
            update();
        }
    }

    function update() {
        jumbotron.style.height = viewportHeight + 'px';
    }

    update();
}
(function() {
    let lastFrameTime = performance.now();
    let frameCount = 0;

    function updateFPS() {
        const now = performance.now();
        frameCount++;
        if (now >= lastFrameTime + 1000) {
            const fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
            document.getElementById('fps-counter').textContent = `FPS: ${fps}`;
        }
        requestAnimationFrame(updateFPS);
    }

    requestAnimationFrame(updateFPS);
})();


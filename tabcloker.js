(function() {
    let lastTime = Date.now();
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            lastTime = Date.now();
        } else {
            const deltaTime = Date.now() - lastTime;
            alert(`You were away for ${Math.floor(deltaTime / 1000)} seconds!`);
        }
    });
})();


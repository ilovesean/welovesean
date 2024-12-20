(function() {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel='icon']");
    const cloakedTitle = "Study Mode";
    const cloakedFavicon = "images/study.png"; // Make sure to have a "study.png" image in your images folder

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = cloakedTitle;
            originalFavicon.setAttribute("href", cloakedFavicon);
        } else {
            document.title = originalTitle;
            originalFavicon.setAttribute("href", "images/favicon.png"); // Ensure your favicon is named correctly
        }
    });
})();


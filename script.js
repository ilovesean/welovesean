function cloakTab() {
    document.title = "Educational Resource";
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = 'img/edu-icon.png'; // Replace with a path to an educational icon
}

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

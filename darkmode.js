function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'css/lightmode.css') {
        themeStyle.setAttribute('href', 'css/darkmode.css');
    } else {
        themeStyle.setAttribute('href', 'css/lightmode.css');
    }
}

function toggleTheme(theme) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `${theme}.css`;
    head.appendChild(link);
    document.body.className = theme;
}

const defaultTheme = localStorage.theme ? localStorage.theme : 'theme1';
toggleTheme(defaultTheme);

const themeBG = document.getElementById('theme-bg');

const themeBtns = document.getElementsByClassName('theme-toggle');
for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', function (e) {
        const theme = e.target.id;
        localStorage.theme = theme;
        toggleTheme(theme);
        themeBG.className = `theme-bg ${theme}`;
    });
}

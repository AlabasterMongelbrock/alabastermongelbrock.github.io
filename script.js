document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sidenoteToggles = document.querySelectorAll('.sidenote-toggle');
    
    sidenoteToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const sidenoteId = toggle.id.replace('-toggle', '');
            const sidenote = document.getElementById(sidenoteId);
            sidenote.style.display = sidenote.style.display === 'none' ? 'block' : 'none';
        });
    });
});

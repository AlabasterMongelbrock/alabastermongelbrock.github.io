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

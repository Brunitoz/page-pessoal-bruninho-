document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE DO MENU MOBILE ---
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navMenu = document.getElementById('nav-menu');

    menuHamburguer.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- FUNCIONALIDADE DO MODO ESCURO ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // --- BÔNUS: Fechar menu mobile ao clicar em um link ---
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

});

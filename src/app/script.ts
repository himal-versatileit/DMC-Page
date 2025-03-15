document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
    const navLinks = document.getElementById('nav-links') as HTMLElement;

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

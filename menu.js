const headerHost = document.querySelector('[data-site-header]');

if (headerHost) {
    headerHost.outerHTML = `
        <header>
            <div class="logo">Kelas <span>XII IPA 1</span></div>
            <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="main-nav"><i class="fas fa-bars" aria-hidden="true"></i></button>
            <nav id="main-nav" aria-label="Navigasi utama">
                <ul><li><a href="index.html">Beranda</a></li><li><a href="tentang.html">Tentang</a></li><li><a href="struktur.html">Struktur</a></li><li><a href="galeri.html">Daftar Kelas</a></li></ul>
            </nav>
        </header>`;
}

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const navLinks = document.querySelectorAll('#main-nav a');

function closeMenu() {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
    menuToggle.querySelector('i').className = 'fas fa-bars';
}

menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    menuToggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

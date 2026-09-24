const profileCards = document.querySelectorAll('.profile-card');
const profileModal = document.querySelector('#profile-modal');
const profileTitle = document.querySelector('#profile-title');
const profileCity = document.querySelector('#profile-city');
const profileInstagram = document.querySelector('#profile-instagram');
const profileQuote = document.querySelector('#profile-quote');
const profileStatus = document.querySelector('#profile-status');
const profilePhoto = document.querySelector('#profile-photo');
const profileInitials = document.querySelector('#profile-initials');
let lastFocusedCard;

function openProfile(card) {
    lastFocusedCard = card;
    const data = studentData[card.dataset.name] || card.dataset;
    const photo = data.photo || '';
    const instagram = data.instagram || 'Belum diisi';
    const instagramUsername = instagram.replace(/^@/, '').trim();
    profileTitle.textContent = card.dataset.name;
    profileCity.textContent = data.city || 'Belum diisi';
    profileInstagram.textContent = instagramUsername ? `@${instagramUsername}` : 'Belum diisi';
    profileInstagram.href = instagramUsername ? `https://www.instagram.com/${encodeURIComponent(instagramUsername)}/` : '#';
    profileInstagram.classList.toggle('is-empty', !instagramUsername || instagramUsername === 'Belum diisi');
    profileQuote.textContent = `“${data.quote || 'Kata-kata siswa akan tampil di sini.'}”`;
    profileInitials.textContent = card.dataset.name.slice(0, 1).toUpperCase();
    profileStatus.textContent = photo ? 'Foto profil tersedia' : 'Foto belum diunggah';
    profilePhoto.classList.toggle('has-image', Boolean(photo));
    profilePhoto.style.backgroundImage = photo ? `url("${photo}")` : '';
    profileModal.hidden = false;
    document.body.classList.add('modal-open');
    profileModal.querySelector('.profile-close').focus();
}

function closeProfile() {
    profileModal.hidden = true;
    document.body.classList.remove('modal-open');
    lastFocusedCard?.focus();
}

profileCards.forEach((card) => {
    card.addEventListener('click', () => openProfile(card));
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProfile(card);
        }
    });
});

document.querySelectorAll('[data-close-profile]').forEach((element) => {
    element.addEventListener('click', closeProfile);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !profileModal.hidden) closeProfile();
});

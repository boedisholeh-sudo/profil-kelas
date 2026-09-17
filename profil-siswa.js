const profileCards = document.querySelectorAll('.profile-card');
const profileModal = document.querySelector('#profile-modal');
const profileTitle = document.querySelector('#profile-title');
const profileCity = document.querySelector('#profile-city');
const profileInstagram = document.querySelector('#profile-instagram');
const profileQuote = document.querySelector('#profile-quote');
const profilePhoto = document.querySelector('#profile-photo');
const profileInitials = document.querySelector('#profile-initials');
let lastFocusedCard;

function openProfile(card) {
    lastFocusedCard = card;
    profileTitle.textContent = card.dataset.name;
    profileCity.textContent = card.dataset.city;
    profileInstagram.textContent = card.dataset.instagram;
    profileQuote.textContent = `“${card.dataset.quote}”`;
    profileInitials.textContent = card.dataset.name.slice(0, 1).toUpperCase();
    profilePhoto.classList.toggle('has-image', Boolean(card.dataset.photo));
    profilePhoto.style.backgroundImage = card.dataset.photo ? `url("${card.dataset.photo}")` : '';
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

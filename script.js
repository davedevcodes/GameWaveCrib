// Get elements
const menuToggle = document.getElementById('menuToggle');
const menuCancel = document.getElementById('menuCancel');
const navLinks = document.getElementById('navLinks');

// Open menu with slide-down animation
menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuToggle.style.display = 'none';
  menuCancel.style.display = 'block';
});

// Close menu with slide-up animation
menuCancel.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuCancel.style.display = 'none';
  menuToggle.style.display = 'flex';
});


// JavaScript for filtering cards
const filterDropdown = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

filterDropdown.addEventListener('change', (event) => {
    const filterValue = event.target.value;

    cards.forEach(card => {
        // Show all cards if "all" is selected
        if (filterValue === 'all' || card.dataset.duration === filterValue) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});




// Get elements
const openPopupButtons = document.querySelectorAll('.open-popup'); // Select all buttons
const closePopup = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');

// Open popup on click for all buttons
openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupOverlay.style.display = 'flex';
  });
});

// Close popup on click
closePopup.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Close popup when clicking outside the form
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

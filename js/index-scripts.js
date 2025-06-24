const track = document.querySelector('.carousel-track');
const container = document.querySelector('.carousel-track-container');
const nextBtn = document.querySelector('.carousel-button.next');
const prevBtn = document.querySelector('.carousel-button.prev');

const originalCards = Array.from(track.children);
const gap = 24;

originalCards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});
originalCards.slice().reverse().forEach(card => {
  const clone = card.cloneNode(true);
  track.insertBefore(clone, track.firstChild);
});

const cards = Array.from(track.children);
const totalOriginal = originalCards.length;
let index = totalOriginal;

function updateCarousel(animate = true) {
  const cardWidth = cards[0].offsetWidth;
  const containerWidth = container.offsetWidth;
  const totalCardWidth = cardWidth + gap;

  const offset = totalCardWidth * index - (containerWidth / 2) + (cardWidth / 2);
  track.style.transition = animate ? 'transform 0.5s ease' : 'none';
  track.style.transform = `translateX(${-offset}px)`;

  cards.forEach((card, i) => {
    card.classList.toggle('inactive', i !== index);
  });
}

function moveNext() {
  index++;
  updateCarousel();
}

function movePrev() {
  index--;
  updateCarousel();
}

track.addEventListener('transitionend', () => {
  if (index >= cards.length - totalOriginal) {
    index = totalOriginal;
    updateCarousel(false);
  }
  if (index < totalOriginal) {
    index = cards.length - totalOriginal * 2;
    updateCarousel(false);
  }
});

nextBtn.addEventListener('click', () => {
  moveNext();
  resetInactivityTimer();
});
prevBtn.addEventListener('click', () => {
  movePrev();
  resetInactivityTimer();
});

let inactivityTimeout = null;
let autoScrollInterval = null;

function startAutoScroll() {
  stopAutoScroll();
  autoScrollInterval = setInterval(() => {
    moveNext();
  }, 6000);
}

function stopAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
    autoScrollInterval = null;
  }
}

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  stopAutoScroll();
  inactivityTimeout = setTimeout(() => {
    startAutoScroll();
  }, 10000);
}

resetInactivityTimer();
updateCarousel();

function toggleFaq(item) {
  item.classList.toggle('opened');
}

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");
    if (phoneInput) {
      Inputmask("+375 (99) 999-99-99", {
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true
      }).mask(phoneInput);
    }
});

const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
const hero = document.querySelector('.hero-section'); 

let isMenuOpen = false;

burger.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;

  burger.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('menu-open');

  if (isMenuOpen) {
    hero.style.zIndex = '-1';
  } else {
    hero.style.zIndex = '1';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone_our-contact");
    if (phoneInput) {
      Inputmask("+375 (99) 999-99-99", {
        placeholder: "_",
        showMaskOnHover: false,
        showMaskOnFocus: true
      }).mask(phoneInput);
    }
});
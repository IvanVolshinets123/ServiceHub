const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
const contactsSection = document.querySelector('.contacts-info-section');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('menu-open');

  // Меняем z-index
  if (burger.classList.contains('open')) {
    contactsSection.style.zIndex = '-1';
  } else {
    contactsSection.style.zIndex = '1';
  }
});
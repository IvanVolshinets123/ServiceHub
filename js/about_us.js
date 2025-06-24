const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('menu-open');
});

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


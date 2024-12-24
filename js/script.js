const burgerMenu = document.querySelector('.burger_menu');
const headerMenu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    headerMenu.classList.toggle('active');
});
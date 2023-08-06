const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-icon-close');
const menuDropdown = document.querySelector('.menu-dropdown');
let showMenu = false;

menuIcon.addEventListener('click', () => {
   showMenu = true;

   menuDropdown.classList.add('active');
});

menuClose.addEventListener('click', () => {
   showMenu = false;

   menuDropdown.classList.remove('active');
});

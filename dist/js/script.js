// Navbar JS Start
window.onscroll = function () {
  const header = document.querySelector('nav');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

const buttonProfile = document.querySelector('#profile-button')
const menuProfile = document.querySelector('#profile')
const rotateDropdown = document.querySelector('#rotate')
const buttonNavbar = document.querySelector('#navbar-button')
const menuNavbar = document.querySelector('#navbar')

buttonProfile.addEventListener('click', function(){
  menuProfile.classList.toggle('hidden')
  rotateDropdown.classList.toggle('rotate-180')
  menuNavbar.classList.add('hidden')
});

buttonNavbar.addEventListener('click', function(){
  menuNavbar.classList.toggle('hidden')
  menuProfile.classList.add('hidden')
});
// Navbar JS End
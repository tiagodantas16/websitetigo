const header = document.querySelector('header');
const logo = document.querySelectorAll('.logo')[0]
const navBar = document.querySelectorAll('.nav-bar')[0]
const menu = document.querySelectorAll('.menu')[0]
let isOpen = false;

window.addEventListener('scroll', toggleHeader, false)
menu.addEventListener('click', toggleMenu, false)
navBar.addEventListener('click', navClick, false)

function toggleHeader() {
  if (window.pageYOffset > 60 && header.classList.contains('max-header')) {
    header.classList.remove('max-header')
    header.classList.add('min-header')
    logo.classList.remove('max-logo')
    logo.classList.add('min-logo')
    navBar.classList.remove('max-nav')
    navBar.classList.add('min-nav')
  }else if (window.pageYOffset <= 60 && header.classList.contains('min-header')) {
    header.classList.remove('min-header')
    header.classList.add('max-header')
    logo.classList.remove('min-logo')
    logo.classList.add('max-logo')
    navBar.classList.remove('min-nav')
    navBar.classList.add('max-nav')
  }
}
function toggleMenu() {
  if (!isOpen){
    navBar.classList.add('menu-opened')
    menu.firstElementChild.classList.add('close-btn')
    isOpen = true;
  } else {
    navBar.classList.remove('menu-opened')
    menu.firstElementChild.classList.remove('close-btn')
    isOpen = false;
  }
}
function navClick(evt) {
  if (evt.target.tagName === 'A') {
    toggleMenu()
  }
}
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.header-bottom__menu-btn')
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn')

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active')
})
mobileMenuBtnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active')
})
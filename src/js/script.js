const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuBtn = document.querySelector('.header-bottom__menu-btn')
const mobileMenuBtnClose = document.querySelector('.mobile-menu__btn')

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active')
})
mobileMenuBtnClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active')
})

const searchBtn = document.querySelector('.header-bottom__search-btn')
const searchInputWrapper = document.querySelector('.header-bottom__search-wrapper')
const searchClose = document.querySelector('.header-bottom__search-close')
searchBtn.addEventListener('click', () => {
  searchInputWrapper.classList.add('active')
})

searchClose.addEventListener('click', () => {
  searchInputWrapper.classList.remove('active')
})




const animItems = document.querySelectorAll('.anim-items')
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300)
}
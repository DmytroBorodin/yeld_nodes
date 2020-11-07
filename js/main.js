'use strict'

let burgerBtn = document.querySelector('.burger-block');
let navBar = document.querySelector('.nav');
let navRow = document.querySelector('.nav-row');
let logo = document.querySelector('.logo');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	navRow.classList.toggle('active');
});

window.addEventListener('scroll', function() {
	if (pageYOffset > 150) {
		logo.classList.add('onScroll');
		navBar.classList.add('navBg');
	}else if(pageYOffset < 150) {
		logo.classList.remove('onScroll');
		navBar.classList.remove('navBg');
	}
});

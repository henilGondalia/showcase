$('.coffee-cup').ripples({
	resolution: 912,
	dropRadius: 30,
	perturbance: 0.04,
	interactive: true,
});
$('.coffee-cup-mask').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
	interactive: true,
});

// Tabs Action
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
	item.addEventListener("click", activeTab);
});


function activeTab(item) {
	const btnTarget = item.currentTarget;
	const content = btnTarget.dataset.content;

	tabContent.forEach((item) => {
		item.classList.remove("is-active");
	});

	tabLink.forEach((item) => {
		item.classList.remove("is-active");
	});

	document.querySelector("#" + content).classList.add("is-active");
	btnTarget.classList.add("is-active");
}

// scroll to top
let mybutton = document.getElementById("back_to_top_button");

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  mybutton.classList.add("show");
	} else {
	  mybutton.classList.remove("show");
	}
}
window.onscroll = function() {scrollFunction()};

function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
	// document.body.scrollTop = 0;
	// document.documentElement.scrollTop = 0;
}
mybutton.addEventListener("click", topFunction);
  
// Swiper -->
var swiper = new Swiper(".mySwiper", {
	loop: true,
	loopFillGroupWithBlank: true,
	allowTouchMove: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1200: {
		  slidesPerView: 3,
		  loopedSlides: 3,
		  spaceBetween: 30
		},
		1024: {
		  slidesPerView: 2,
		  loopedSlides: 2,
		  spaceBetween: 30
		},
		768: {
		  slidesPerView: 1,
		  loopedSlides: 1,
		  spaceBetween: 30
		},
		675: {
		  slidesPerView: 1,
		  loopedSlides: 1,
		  spaceBetween: 20,
		}
	},
	on: {
		init: function() {
				checkArrow();
		},
		resize: function () {
				checkArrow();
		}
	}
});

function checkArrow() {
	var swiperPrev = document.querySelector('.swiper-button-prev');
	var swiperNext = document.querySelector('.swiper-button-next');
	let width = screen.width;
	console.log('Success', width);
	if ( width > 768  ) {
	  swiperPrev.style.visibility = 'visible';
	  swiperNext.style.visibility = 'visible';
	} else {
	  swiperPrev.style.visibility = 'hidden';
	  swiperNext.style.visibility = 'hidden';
	}
  }

// intialize aos
AOS.init();